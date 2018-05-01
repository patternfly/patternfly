## Overview

A Grid layout framework including responsive columns, row spans and gutters 

## Usage

| Class | Usage |
| -- | -- |
| `.pf-l-grid` | **Outcome:** Initializes the grid layout | **Required:** Yes
| `.pf-has-gutters` | **Outcome:** Add gutters to grid layout | **Required:** No
| `.pf-l-grid__item` | **Outcome:** Defines child as a PatternFly grid item | **Required:** Yes
| `.pf-is-{1-12}-col` | **Outcome:** Defines width of grid item | **Required:** No | **Remarks:** Although not required, they are strongly suggested.<br> If not used, grid item will default to 12 col.
| `.pf-is-{1-12}-col-on-xs` <br> `.pf-is-{1-12}-col-on-sm` <br> `.pf-is-{1-12}-col-on-lg` <br> `.pf-is-{1-12}-col-on-xl` | **Outcome:** Sets grid-item width based on breakpoint | **Required:** No
| `.pf-is-2-row` | **Outcome:** Defines grid item row span | **Required:** No
