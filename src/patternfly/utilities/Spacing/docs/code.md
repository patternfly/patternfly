## Overview

Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-m-sm-on-lg**

## Margin properties:
| Abbreviation | Property |
| -- | -- |
| `m` |  margin |
| `mt` | margin-top |
| `mr` | margin-right |
| `mb` | margin-bottom |
| `ml` | margin-left |
| `mx` | margin-left & margin-right |
| `my` | margin-top & margin-bottom |

## Padding properties:
| Abbreviation | Property |
| -- | -- |
| `p` |  padding |
| `pt` | padding-top |
| `pr` | padding-right |
| `pb` | padding-bottom |
| `pl` | padding-left |
| `px` | padding-left & padding-right |
| `py` | padding-top & padding-bottom |

## Size values:
| Abbreviation | Property |
| -- | -- |
| `auto` |  auto |
| `0` | 0 |
| `xs` | var(--pf-global--spacer--xs) |
| `sm` | var(--pf-global--spacer--sm) |
| `md` | var(--pf-global--spacer--md) |
| `lg` | var(--pf-global--spacer--lg) |
| `xl` | var(--pf-global--spacer--xl) |
| `2xl` | var(--pf-global--spacer--2xl) |
| `3xl` | var(--pf-global--spacer--3xl) |

<!-- ## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-u-flex` |  accessibility notes. |
 -->

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-{m, mt, mr, mb, ml, mx, my}-{size}{-on-[breakpoint]}`  | `*` |  Sets margin top, right, bottom, left, margin-left & right, margin-top & bottom to spacer value |
| `.pf-u-{p, pt, pr, pb, pl, px, py}-{size}{-on-[breakpoint]}`  | `*` |  Sets padding top, right, bottom, left, padding-left & right, padding-top & bottom to spacer value |
