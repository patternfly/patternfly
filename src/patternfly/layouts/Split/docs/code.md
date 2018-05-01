# Split Layout

## Overview

Split layouts are meant for use in positioning child elements horizontally, with one of the children being used as primary content area, and the other(s) being used as a secondary content area.

## Usage

| Class | Usage |
| -- | -- |
| `.pf-l-split` | **Outcome:** Initiates the split layout | **Required:** Yes |
| `.pf-l-split__primary` | **Outcome:** Specificies the primary child of the layout, which expands vertucally when needed. The primary child will expand horizontally to fill all space not needed by the secondary children. | **Required:** No | **Remarks:** If the primary is not explicitly set, the second child with act as the primary child.|
| `.pf-l-split__secondary` | **Outcome:** Specifies a secondary child of the layout, which accommodates to its content. | **Required:** No **Remarks:** A split can have one or more secondary children. If secondary children are not explicitly set, all children but the second will act as secondary children.|
| `.pf-has-gutter` | **Outcome:** Adds space between children | **Required:** No |

