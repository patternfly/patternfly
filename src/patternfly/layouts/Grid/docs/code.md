## Overview

A Grid layout framework including responsive columns, row spans and gutters 

## Usage

| Class | Usage |
| -- | -- |
| `.pf-l-grid` | **Applied to:** `<div>` | **Outcome:** Initializes the grid layout | **Required:** Yes |  |
| `.pf-has-gutters` | **Applied to:** `.pf-l-grid` | **Outcome:** Adds space between children | **Required:** No | |
| `.pf-l-grid__item` | **Applied to:** `<div>` | **Outcome:** Explicitly sets a child of the grid | **Required:** No | **Remarks:** This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.
| `.pf-is-{1-12}-col` | **Applied to:** `<div>`, `.pf-l-grid__item` | **Outcome:** Defines grid item width | **Required:** No | **Remarks:** Although not required, they are strongly suggested. If not used, grid item will default to 12 col.
| `.pf-is-{1-12}-col-on-{breakpoint}` | **Applied to:** `.pf-l-grid__item`, `.pf-is-{1-12}-col` | **Outcome:** Defines grid-item width based on breakpoint. | **Required:** No | **Remarks:** Breakpoints: xs, sm, md, lg, xl
| `.pf-is-{2-x}-row` | **Applied to:** `.pf-is-{1-11}-col` | **Outcome:** Defines grid item row span | **Required:** No | **Remarks:** For row spans to function correctly, the value of of the current row plus the grid items to span must be equal to or less than 12. Example: .pf-is-8-col.pf-is-2-row + .pf-is-4-col + .pf-is-4-col. There is no limit to number of spanned rows. **Row span does NOT work in IE11!**
