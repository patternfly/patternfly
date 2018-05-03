## Overview

A Grid layout framework including responsive columns, row spans and gutters 

## Usage

| Class | Usage |
| -- | -- |
| `.pf-l-grid` | **Outcome:** Initializes the grid layout | **Required:** Yes
| `.pf-has-gutters` | **Outcome:** Adds space between children | **Required:** No
| `.pf-l-grid__item` | **Outcome:** Explicitly sets a child of the grid | **Required:** No | **Remarks:** This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.
| `.pf-is-{1-12}-col` | **Outcome:** Defines grid item width | **Required:** No | **Remarks:** Although not required, they are strongly suggested.<br> If not used, grid item will default to 12 col.
| `.pf-is-{1-12}-col-on-xs` <br> `.pf-is-{1-12}-col-on-sm` <br> `.pf-is-{1-12}-col-on-lg` <br> `.pf-is-{1-12}-col-on-xl` | **Outcome:** Defines grid-item width based on breakpoint | **Required:** No
| `.pf-is-2-row` | **Outcome:** Defines grid item row span | **Required:** No
