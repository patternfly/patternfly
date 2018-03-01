# Split Layout

## Overview

Split layouts are meant for use in positioning child elements horizontally, with one of the children being used as primary content area, and the other(s) being used as a secondary content area.

## Notes

- Splits may contain at most 1 main content area.
- Splits may contain 1 or more secondary content areas, but it is recommended not to exceed 2.
- Splits are designed to always display the children horizontally, regardless of the device or viewport.

## Usage

- `.pf-l-split` **Applied to:** `<div>` |  **Outcome:** Established element as a split layout **Required:** Yes **Remarks:** None
  - `.pf-l-split__main` **Applied to:** `<div>` |  **Outcome:** Explicitly sets a child element as the main content area  **Required:** No **Remarks:** If not applied, the main content area will be the second child.
  - `.pf-l-split__secondary` **Applied to:** `<div>` | **Outcome:** Explicitly sets a child element as a secondary content area **Required:** No **Remarks:** If not applied, all children except the second child will be secondary content.
