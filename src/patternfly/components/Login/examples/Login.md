---
id: Login page
section: components
cssPrefix: pf-c-login
wrapperTag: div
---

## Examples
### Basic
```hbs isFullscreen
{{#> background-image}}{{/background-image}}
{{#> login}}
  {{#> login-container}}
    {{> __login-header}}
    {{#> login-main}}
      {{> __login-main-header}}
      {{#> login-main-body}}
        {{#> form}}
          {{#> form-helper-text form-helper-text--modifier="pf-m-error pf-m-hidden"}}
            {{#> form-helper-text-icon}}
              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            {{/form-helper-text-icon}}
            Invalid login credentials.
          {{/form-helper-text}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-username"' required="true"}}Username{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--attribute='required input="true" type="text" id="login-demo-form-username" name="login-demo-form-username"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-password"' required="true"}}Password{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--attribute='required input="true" type="password" id="login-demo-form-password" name="login-demo-form-password"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> check}}
              {{#> check-input check-input--attribute='type="checkbox" id="login-demo-checkbox" name="login-demo-checkbox"'}}{{/check-input}}
              {{#> check-label check-label--attribute='for="login-demo-checkbox"'}}Keep me logged in for 30 days.{{/check-label}}
            {{/check}}
          {{/form-group}}
          {{#> form-group form-group--modifier="pf-m-action"}}
            {{#> button button--modifier="pf-m-primary pf-m-block" button--IsSubmit="true"}}
              Log in
            {{/button}}
          {{/form-group}}
        {{/form}}
      {{/login-main-body}}
      {{> __login-main-footer}}
    {{/login-main}}
    {{> __login-footer}}
  {{/login-container}}
{{/login}}
```

### Invalid
```hbs isFullscreen
{{#> background-image}}{{/background-image}}
{{#> login}}
  {{#> login-container}}
    {{> __login-header}}
    {{#> login-main}}
      {{> __login-main-header}}
      {{#> login-main-body}}
        {{#> form}}
          {{#> form-helper-text form-helper-text--modifier="pf-m-error" form-helper-text--attribute='aria-live="polite"'}}
            {{#> form-helper-text-icon}}
              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            {{/form-helper-text-icon}}
            Invalid login credentials.
          {{/form-helper-text}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="invalid-login-demo-form-username"' required="true"}}Username{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--attribute='required type="text" id="invalid-login-demo-form-username" name="invalid-login-demo-form-username" aria-invalid="true"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="invalid-login-demo-form-password"' required="true"}}Password{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--attribute='required type="password" id="invalid-login-demo-form-password" name="invalid-login-demo-form-password" aria-invalid="true"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> check}}
              {{#> check-input check-input--attribute='type="checkbox" id="invalid-login-demo-checkbox" name="invalid-login-demo-checkbox"'}}{{/check-input}}
              {{#> check-label check-label--attribute='for="invalid-login-demo-checkbox"'}}Keep me logged in for 30 days.{{/check-label}}
            {{/check}}
          {{/form-group}}
          {{#> form-group form-group--modifier="pf-m-action"}}
            {{#> button button--modifier="pf-m-primary pf-m-block" button--IsSubmit="true"}}
              Log in
            {{/button}}
          {{/form-group}}
        {{/form}}
      {{/login-main-body}}
      {{> __login-main-footer}}
    {{/login-main}}
    {{> __login-footer}}
  {{/login-container}}
{{/login}}
```

### Show password
```hbs isFullscreen
{{#> background-image}}{{/background-image}}
{{#> login}}
  {{#> login-container}}
    {{> __login-header}}
    {{#> login-main}}
      {{> __login-main-header}}
      {{#> login-main-body}}
        {{#> form}}
          {{#> form-helper-text form-helper-text--modifier="pf-m-error pf-m-hidden"}}
            {{#> form-helper-text-icon}}
              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            {{/form-helper-text-icon}}
            Invalid login credentials.
          {{/form-helper-text}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-username"' required="true"}}Username{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--attribute='required input="true" type="text" id="login-demo-form-username" name="login-demo-form-username"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-password"' required="true"}}Password{{/form-label}}
            {{#> input-group}}
              {{#> form-control controlType="input" input="true" form-control--attribute='required input="true" type="password" id="login-demo-form-password" name="login-demo-form-password" value="abcd1234"'}}{{/form-control}}
              {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password"'}}
                <i class="fas fa-eye" aria-hidden="true"></i>
              {{/button}}
            {{/input-group}}
          {{/form-group}}
          {{#> form-group}}
            {{#> check}}
              {{#> check-input check-input--attribute='type="checkbox" id="login-demo-checkbox" name="login-demo-checkbox"'}}{{/check-input}}
              {{#> check-label check-label--attribute='for="login-demo-checkbox"'}}Keep me logged in for 30 days.{{/check-label}}
            {{/check}}
          {{/form-group}}
          {{#> form-group form-group--modifier="pf-m-action"}}
            {{#> button button--modifier="pf-m-primary pf-m-block" button--IsSubmit="true"}}
              Log in
            {{/button}}
          {{/form-group}}
        {{/form}}
      {{/login-main-body}}
      {{> __login-main-footer}}
    {{/login-main}}
    {{> __login-footer}}
  {{/login-container}}
{{/login}}
```

### Hide password
```hbs isFullscreen
{{#> background-image}}{{/background-image}}
{{#> login}}
  {{#> login-container}}
    {{> __login-header}}
    {{#> login-main}}
      {{> __login-main-header}}
      {{#> login-main-body}}
        {{#> form}}
          {{#> form-helper-text form-helper-text--modifier="pf-m-error pf-m-hidden"}}
            {{#> form-helper-text-icon}}
              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            {{/form-helper-text-icon}}
            Invalid login credentials.
          {{/form-helper-text}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-username"' required="true"}}Username{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--attribute='required input="true" type="text" id="login-demo-form-username" name="login-demo-form-username"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-password"' required="true"}}Password{{/form-label}}
            {{#> input-group}}
              {{#> form-control controlType="input" input="true" form-control--attribute='required input="true" type="text" id="login-demo-form-password" name="login-demo-form-password" value="abcd1234"'}}{{/form-control}}
              {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Hide password"'}}
                <i class="fas fa-eye-slash" aria-hidden="true"></i>
              {{/button}}
            {{/input-group}}
          {{/form-group}}
          {{#> form-group}}
            {{#> check}}
              {{#> check-input check-input--attribute='type="checkbox" id="login-demo-checkbox" name="login-demo-checkbox"'}}{{/check-input}}
              {{#> check-label check-label--attribute='for="login-demo-checkbox"'}}Keep me logged in for 30 days.{{/check-label}}
            {{/check}}
          {{/form-group}}
          {{#> form-group form-group--modifier="pf-m-action"}}
            {{#> button button--modifier="pf-m-primary pf-m-block" button--IsSubmit="true"}}
              Log in
            {{/button}}
          {{/form-group}}
        {{/form}}
      {{/login-main-body}}
      {{> __login-main-footer}}
    {{/login-main}}
    {{> __login-footer}}
  {{/login-container}}
{{/login}}
```
## Documentation
### Usage
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