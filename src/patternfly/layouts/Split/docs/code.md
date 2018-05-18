## Overview

Split layouts are meant for use in positioning child elements horizontally, with one of the children being used as primary content area, and the other(s) being used as a secondary content area.

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-l-split` | `<div>`, `<section>`, or `<article>` | Initiates the split layout |
| `.pf-l-split__primary` | `<div>` | Specificies the primary child of the layout, which expands vertically when needed. The primary child will expand horizontally to fill all space not needed by the secondary children. If the primary is not explicitly set, the second child will act as the primary child.|
| `.pf-l-split__secondary` | `<div>` | Specifies a secondary child of the layout, which accommodates to its content. A split can have one or more secondary children. If secondary children are not explicitly set, all children but the second will act as secondary children.|
| `.pf-has-gutter` | `.pf-l-split` | Adds space between children |
