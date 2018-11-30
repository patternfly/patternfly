## Overview

When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.

## Usage

| PF3 Class | Applied To | PF4 Class | Applied To | Outcome |
| -- | -- | -- | -- | -- |
| `.login-pf` | `<body>` | `.pf-c-login` | `<div>` | Parent container that holds various login components. |
| `.container-fluid`| `<div>` | `.pf-c-login__container`| `<div>` | Primary container that holds the login component itself. |
| `.login-pf-page-header` | `<header>` | `.pf-c-login__header` | `<header>` | Header container that sits outside of the login component. |
| `.login-pf-header` | `<header>` | `.pf-c-login__main-header` | `<header>` | Header container that sits inside of the login component. |
| `.card-pf` > `<form>` | `<form>` | `.pf-c-login__main-body` | `<div>` | Main container that holds the form section of the login component. |
| `.card-pf` > `<form>` | `<form>` | `.pf-c-form` | `<form>` | Primary login form. |
| `.form-group` | `<div>` | `.pf-c-form__group`| `<div>` | Parent container that holds form label and input field containers. |
| `.sr-only` | `<label>` | `.pf-c-form__label` | `<label>` | Inner form label. |
| `.form-control.input-lg` | `<input>` | `.pf-c-form-control` | `<input>` | Inner form input. |
| `.form-group login-pf-settings` | `<div>` | `.pf-c-form__group.pf-m-action`| `<div>` | Login submit button container. |
| `.btn.btn-primary.btn-block.btn-lg` | `<button>` | `.pf-c-button.pf-c-button.pf-m-primary` | `<button>` | PF login button. |
| `.card-pf` > `login-pf-signup` | -- | -- | -- | PF3 signup section. |
| `.login-pf-page-footer` | `<footer>` | `.pf-c-login__footer` | `<footer>` | Footer container that sits inside of the login component |
| `.login-pf-page-footer-sso-services` | -- | -- | -- | PF3 footer servies section. |
| `.login-pf-page-footer-sso-services-logos` | `<ul>` | `.pf-c-list.pf-m-grid` | `<ul>` | Grid of social media connections. |
| `.login-pf-page-footer-links`| `<ul>` | `.pf-c-login__footer `| `<footer>` | Terms and policy links. |