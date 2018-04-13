# Split Layout

## Overview

Split layouts are meant for use in positioning child elements horizontally, with one of the children being used as primary content area, and the other(s) being used as a secondary content area.

## Usage

| Class | Usage |
| -- | -- |
| `.pf-l-split` | **Outcome:** Initiates the split layout **Required:** Yes |
| `.pf-l-split__primary` | **Outcome:** Specificies the primary child of the layout, which expands vertically when needed. **Required:** No **Remarks:** If the primary is not explicitly set, the layout will use the second child as the primary item.|
| `.pf-l-split__secondary` | **Outcome:** Specificies a secondary child of the layout, which accommodates to it's content. **Required:** No **Remarks:** A split can have one or more secondary children. If secondary children are not explicitly set, the layout will use all children, except the second child.|
