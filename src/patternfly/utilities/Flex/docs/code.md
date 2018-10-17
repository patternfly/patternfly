## Overview

For these utilities to have effect, the parent element must be set to `display: flex` or `display: inline-flex`. Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-flex-row-on-lg**

<!-- ## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-u-flex` |  accessibility notes. |
 -->

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-u-flex-direction-row{-on-[breakpoint]}`            | `*` |  Sets flex-direction: row |
| `.pf-u-flex-direction-row-reverse{-on-[breakpoint]}`    | `*` |  Sets flex-direction: row-reverse |
| `.pf-u-flex-direction-column{-on-[breakpoint]}`         | `*` |  Sets flex-direction: column |
| `.pf-u-flex-direction-column-reverse{-on-[breakpoint]}` | `*` |  Sets flex-direction: column-reverse |
| `.pf-u-justify-content-flex-start{-on-[breakpoint]}`    | `*` |  Sets justify-content: flex-start |
| `.pf-u-justify-content-flex-end{-on-[breakpoint]}`      | `*` |  Sets justify-content: flex-end |
| `.pf-u-justify-content-center{-on-[breakpoint]}`        | `*` |  Sets justify-content: center |
| `.pf-u-justify-content-space-around{-on-[breakpoint]}`  | `*` |  Sets justify-content: space-around |
| `.pf-u-justify-content-space-between{-on-[breakpoint]}` | `*` |  Sets justify-content: space-between |
| `.pf-u-align-items-flex-start{-on-[breakpoint]}`        | `*` |  Sets align-items: flex-start |
| `.pf-u-align-items-flex-end{-on-[breakpoint]}`          | `*` |  Sets align-items: flex-start |
| `.pf-u-align-items-center{-on-[breakpoint]}`            | `*` |  Sets align-items: center |
| `.pf-u-align-items-baseline{-on-[breakpoint]}`          | `*` |  Sets align-items: baseline |
| `.pf-u-align-items-stretch{-on-[breakpoint]}`           | `*` |  Sets align-items: stretch |
| `.pf-u-align-self-flex-start{-on-[breakpoint]}`         | `*` |  Sets align-self: flex-start |
| `.pf-u-align-self-flex-end{-on-[breakpoint]}`           | `*` |  Sets align-self: flex-end |
| `.pf-u-align-self-center{-on-[breakpoint]}`             | `*` |  Sets align-self: center |
| `.pf-u-align-self-baseline{-on-[breakpoint]}`           | `*` |  Sets align-self: baseline |
| `.pf-u-align-self-stretch{-on-[breakpoint]}`            | `*` |  Sets align-self: stretch |
| `.pf-u-align-content-flex-start{-on-[breakpoint]}`      | `*` |  Sets align-content: flex-start |
| `.pf-u-align-content-flex-end{-on-[breakpoint]}`        | `*` |  Sets align-content: flex-end |
| `.pf-u-align-content-center{-on-[breakpoint]}`          | `*` |  Sets align-content: center |
| `.pf-u-align-content-space-between{-on-[breakpoint]}`   | `*` |  Sets align-content: space-between |
| `.pf-u-align-content-space-around{-on-[breakpoint]}`    | `*` |  Sets align-content: space-around |
| `.pf-u-align-content-stretch{-on-[breakpoint]}`         | `*` |  Sets align-content: stretch |
| `.pf-u-flex-shrink{1 or 0}{-on-[breakpoint]}`           | `*` |  Sets flex-shrink to 1 or 0 |
| `.pf-u-flex-grow{1 or 0}{-on-[breakpoint]}`             | `*` |  Sets flex-grow to 1 or 0 |
| `.pf-u-flex-basis{0 or auto}{-on-[breakpoint]}`         | `*` |  Sets flex-basis to 0 auto |
| `.pf-u-flex-fill{-on-[breakpoint]}`                     | `*` |  Sets flex to 1 1 auto |
| `.pf-u-flex-wrap{-on-[breakpoint]}`                     | `*` |  sets flex-wrap: wrap |
| `.pf-u-flex-nowrap{-on-[breakpoint]}`                   | `*` |  sets flex-wrap: nowrap |
| `.pf-u-flex-wrap-reverse{-on-[breakpoint]}`             | `*` |  sets flex-wrap: wrap-reverse |
