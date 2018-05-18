## Overview

A level is a layout that distributes the space between children evenly and it centers children on the x-axis. By default it positions the children horizontally, but on smaller devices it will position the children vertically.

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-l-level` | `<div>`, `<section>`, or `<article>` | Initializes the level layout |
| `.pf-l-level__item` | `<div>` | Explicitly sets a child of the level. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.
| `.pf-has-gutter` | `.pf-l-level` |  Adds space between children |
