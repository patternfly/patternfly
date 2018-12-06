## Overview

When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.

## Usage

| PF3 Class | Applied To | PF4 Class | Applied To | Outcome |
| -- | -- | -- | -- | -- |
| `.login-pf` | `<body>` | `.pf-c-login` | `<div>` | Parent container that holds various login components. |
| `.login-pf-page` | `<div>` | -- | -- | A container that holds the primary login container. |
| `.container-fluid`| `<div>` | `.pf-c-login__container`| `<div>` | Primary container that holds the login component itself. |
| `.login-pf-page-header` | `<header>` |`.pf-c-login__header` | `<header>` | Header container that sits outside of the login component. |
| `.login-pf-brand`| `<img>` | `.pf-c-brand` | `<img>` | Patternfly logo brand image tag. |
| -- | -- | `.pf-c-login__main` | `<main>` | Main login container. |
| -- | -- | `.pf-c-login__main-body` | `<div>` | Main form container. |
| `.login-pf-header` | `<header>` | `.pf-c-login__main-header` | `<header>` | Header container that sits inside of the login component. |
| `.login-pf-signup` | `<p>` | -- | -- | PF3 signup section. |
| `.login-pf-settings`| `<div>` | `.pf-c-check` | `<div>` | Login "Keep me logged in for 30 days" instructions. |
| `.login-pf-page-footer` | `<footer>` | `.pf-c-login__footer` | `<footer>` | Footer container that sits inside of the login component |
| -- | -- | `.pf-c-login__main-footer` | `<footer>` | Main footer container for social media logins. |
| `.login-pf-page-footer-links`| `<ul>` | `.pf-c-list.pf-m-inline`| `<ul>` | Terms and policy links. |
| `.login-pf-page-footer-link`| `<a>` | `.pf-c-login__footer-link `| `<a>` | Terms and policy linked `a` tags. |