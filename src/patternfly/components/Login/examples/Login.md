---
title: Login
section: components
cssPrefix: pf-c-login
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import loginSimpleExampleRaw from '!!raw-loader!./login-simple-example.hbs';
import loginInvalidExampleRaw from '!!raw-loader!./login-invalid-example.hbs';
import LoginSimpleExample from './login-simple-example.hbs';
import LoginInvalidExample from './login-invalid-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const loginSimpleExample = LoginSimpleExample();
  const loginInvalidExample = LoginInvalidExample();
  const headingText = 'Login';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Login simple" fullPageOnly="true" handlebars={loginSimpleExampleRaw}>
        {loginSimpleExample}
      </Example>
      <Example heading="Login invalid" fullPageOnly="true" handlebars={loginInvalidExampleRaw}>
        {loginInvalidExample}
      </Example>
    </Documentation>
  );
};
```

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-login` | `<div>` |  Initializes the login component. **Required**|
| `.pf-c-login__container` | `<div>` |  Positions the login component content. **Required**|
| `.pf-c-login__header` | `<header>` |  Positions the login header. **Required**|
| `.pf-c-login__header .pf-c-brand` | `<img>` |  Creates a brand image inside of login header. **Required** |
| `.pf-c-login__main` | `<main>` |  Positions the login main area. **Required** |
| `.pf-c-login__main-header` | `<header>` |  Creates the header of the main area. **Required** |
| `.pf-c-login__main-header .pf-c-title` | `<h1>,<h2>,<h3>,<h4>,<h5>,<h6>` |  Creates a title in the main header area. **Required** |
| `.pf-c-login__main-header-desc` | `<p>` |  Creates the description in the main area header. |
| `.pf-c-login__main-header .pf-c-dropdown` | `<div>` |  Creates a language selector dropdown in the main header area. |
| `.pf-c-login__main-body` | `<div>` |  Creates the body of the main area. **Required** |
| `.pf-c-login__main-body .pf-c-form` | `<form>` |  Creates the login form in the main body area. **Required**|
| `.pf-c-login__main-body .pf-c-form .pf-c-form-helper-text.pf-m-error` | `<form>` | Creates the error messages shown when the form has errors. When not active, apply `.pf-m-hidden.` **Required** |
| `.pf-c-login__main-footer` | `<footer>` |  Creates the footer of the main area. **Required** |
| `.pf-c-login__main-footer-links` | `<ul>` |  Creates a list of links in the main footer. **Required** |
| `.pf-c-login__main-footer-links-item` | `<li>` |  Creates proper spacing for links in the main footer. **Required** |
| `.pf-c-login__main-footer-links-item-link` | `<a>` |  Creates link in links list in footer. **Required** |
| `.pf-c-login__main-footer-band` | `<div>` | Styles a band in the footer. |
| `.pf-c-login__main-footer-band-item` | `<p>` | Adds information to the band in the footer. |
| `.pf-c-login__footer` | `<footer>` |  Positions the login footer. **Required** |
| `.pf-c-login__footer .pf-c-list` | `<ul>` |  Creates a list of links in the login footer. **Required** |