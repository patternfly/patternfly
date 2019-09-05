## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-flex` | `*` | Initiates the flex layout. **Required** |
| `.pf-l-flex__item` | `.pf-l-flex > *` | Initiates a flex item. **Required** |
| `.pf-m-flex{-on-[breakpoint]}` | `.pf-l-flex` | Initializes or resets the flex layout display property to flex. |
| `.pf-m-inline-flex{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout display property to inline-flex. |
| `.pf-m-grow{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` | Modifies a nested flex layout or flex item flex-grow property to 1. |
| `.pf-m-shrink{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` | Modifies a nested flex layout or flex item flex-shrink property to 1. |
| `.pf-m-full-width{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` | Modifies a nested flex layout or flex item flex item to full width of parent. |
| `.pf-m-flex-1{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 1 0 0. |
| `.pf-m-flex-2{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 2 0 0. |
| `.pf-m-flex-3{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 3 0 0. |
| `.pf-m-flex-4{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to 4 0 0. |
| `.pf-m-flex-default{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` | Resets a nested flex layout or flex item flex shorthand property to 0 1 auto. |
| `.pf-m-flex-none{-on-[breakpoint]}` | `.pf-l-flex > .pf-l-flex`, `.pf-l-flex__item` | Modifies a nested flex layout or flex item flex shorthand property to none. |
| `.pf-m-column-reverse{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout flex-direction property to column-reverse. |
| `.pf-m-row-reverse{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout flex-direction property to row-reverse. |
| `.pf-m-wrap{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout flex-wrap property to wrap. |
| `.pf-m-wrap-reverse{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout flex-wrap property to wrap-reverse. |
| `.pf-m-nowrap{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout flex-wrap property to nowrap. |
| `.pf-m-justify-content-flex-start{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout justify-content property to flex-start. |
| `.pf-m-justify-content-flex-end{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout justify-content property to flex-end. |
| `.pf-m-justify-content-center{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout justify-content property to center. |
| `.pf-m-justify-content-space-between{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout justify-content property to space-between. |
| `.pf-m-justify-content-space-around{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout justify-content property to space-around. |
| `.pf-m-justify-content-space-evenly{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout justify-content property to space-evenly. |
| `.pf-m-align-items-flex-start{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-items property to flex-start. |
| `.pf-m-align-items-flex-end{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-items property to flex-end. |
| `.pf-m-align-items-center{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-items property to center. |
| `.pf-m-align-items-stretch{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-items property to stretch. |
| `.pf-m-align-items-baseline{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-items property to baseline. |
| `.pf-m-align-content-flex-start{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-content property to flex-start. |
| `.pf-m-align-content-flex-end{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-content property to flex-end. |
| `.pf-m-align-content-center{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-content property to center. |
| `.pf-m-align-content-stretch{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-content property to stretch. |
| `.pf-m-align-content-space-between{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-content property to space-between. |
| `.pf-m-align-content-space-around{-on-[breakpoint]}` | `.pf-l-flex` | Modifies the flex layout align-content property to space-around. |
| `.pf-m-align-left{-on-[breakpoint]}` | `.pf-l-flex`, `.pf-l-flex > *` | Resets the flex layout element margin-left property to 0. |
| `.pf-m-align-right{-on-[breakpoint]}` | `.pf-l-flex`, `.pf-l-flex > *` | Modifies the flex layout element margin-left property to auto. |


## Spacer system

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-spacer-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex`, `.pf-l-flex > .pf-l-flex__item` |  Modifies a nested flex layout or a flex item spacing. |
| `.pf-m-item-space-items-{none, xs, sm, md, lg, xl, 2xl}{-on-[breakpoint]}` | `.pf-l-flex` |  Modifies the flex layout direct descendant spacing. |
