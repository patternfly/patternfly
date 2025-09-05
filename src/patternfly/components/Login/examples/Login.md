---
id: Login page
section: components
cssPrefix: pf-v6-c-login
wrapperTag: div
---

## Examples
### Basic
```hbs isFullscreen
{{> background-image}}
{{#> login}}
  {{#> login-container}}
    {{> __login-header}}
    {{#> login-main}}
      {{> __login-main-header}}
      {{#> login-main-body}}
        {{#> form}}
          {{> form-helper-text helper-text--value='Invalid login credentials.' helper-text--IsHidden=true helper-text-item--IsError=true}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-username"' required="true"}}Username{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute='input="true" type="text" id="login-demo-form-username" name="login-demo-form-username"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-password"' required="true"}}Password{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute='type="password" id="login-demo-form-password" name="login-demo-form-password"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> check}}
              {{#> check-input check-input--attribute='type="checkbox" id="login-demo-checkbox" name="login-demo-checkbox"'}}{{/check-input}}
              {{#> check-label check-label--attribute='for="login-demo-checkbox"'}}Keep me logged in for 30 days.{{/check-label}}
            {{/check}}
          {{/form-group}}
          {{#> form-group form-group--modifier="pf-m-action"}}
            {{#> button button--IsPrimary=true button--IsBlock=true button--IsSubmit=true}}
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
{{> background-image}}
{{#> login}}
  {{#> login-container}}
    {{> __login-header}}
    {{#> login-main}}
      {{> __login-main-header}}
      {{#> login-main-body}}
        {{#> form}}
          {{> form-helper-text helper-text--value='Invalid login credentials.' helper-text-item--IsError=true}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="invalid-login-demo-form-username"' required="true"}}Username{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--IsError='true' form-control--attribute='type="text" id="invalid-login-demo-form-username" name="invalid-login-demo-form-username" aria-invalid="true"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="invalid-login-demo-form-password"' required="true"}}Password{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--IsError='true' form-control--attribute='type="password" id="invalid-login-demo-form-password" name="invalid-login-demo-form-password" aria-invalid="true"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> check}}
              {{#> check-input check-input--attribute='type="checkbox" id="invalid-login-demo-checkbox" name="invalid-login-demo-checkbox"'}}{{/check-input}}
              {{#> check-label check-label--attribute='for="invalid-login-demo-checkbox"'}}Keep me logged in for 30 days.{{/check-label}}
            {{/check}}
          {{/form-group}}
          {{#> form-group form-group--modifier="pf-m-action"}}
            {{#> button button--IsPrimary=true button--IsBlock=true button--IsSubmit=true}}
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
{{> background-image}}
{{#> login}}
  {{#> login-container}}
    {{> __login-header}}
    {{#> login-main}}
      {{> __login-main-header}}
      {{#> login-main-body}}
        {{#> form}}
          {{> form-helper-text helper-text--value='Invalid login credentials.' helper-text--IsHidden=true helper-text-item--IsError=true}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-username"' required="true"}}Username{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute='type="text" id="login-demo-form-username" name="login-demo-form-username"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-password"' required="true"}}Password{{/form-label}}
            {{#> input-group}}
              {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute='type="password" id="login-demo-form-password" name="login-demo-form-password" value="abcd1234"'}}{{/form-control}}
              {{> button button--IsControl=true buton--IsIcon=true button--icon="eye" button--aria-label="Show password"}}
            {{/input-group}}
          {{/form-group}}
          {{#> form-group}}
            {{#> check}}
              {{#> check-input check-input--attribute='type="checkbox" id="login-demo-checkbox" name="login-demo-checkbox"'}}{{/check-input}}
              {{#> check-label check-label--attribute='for="login-demo-checkbox"'}}Keep me logged in for 30 days.{{/check-label}}
            {{/check}}
          {{/form-group}}
          {{#> form-group form-group--modifier="pf-m-action"}}
            {{#> button button--IsPrimary=true button--IsBlock=true button--IsSubmit=true}}
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
{{> background-image}}
{{#> login}}
  {{#> login-container}}
    {{> __login-header}}
    {{#> login-main}}
      {{> __login-main-header}}
      {{#> login-main-body}}
        {{#> form}}
          {{> form-helper-text helper-text--value='Invalid login credentials.' helper-text--IsHidden=true helper-text-item--IsError=true}}
          {{#> form-helper-text form-helper-text--modifier="pf-m-error pf-m-hidden"}}
            {{#> form-helper-text-icon}}
              <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            {{/form-helper-text-icon}}
            Invalid login credentials.
          {{/form-helper-text}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-username"' required="true"}}Username{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute='type="text" id="login-demo-form-username" name="login-demo-form-username"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-password"' required="true"}}Password{{/form-label}}
            {{#> input-group}}
              {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute='type="text" id="login-demo-form-password" name="login-demo-form-password" value="abcd1234"'}}{{/form-control}}
             {{> button button--IsControl=true buton--IsIcon=true button--icon="eye-slash" button--aria-label="Hide password"}}
            {{/input-group}}
          {{/form-group}}
          {{#> form-group}}
            {{#> check}}
              {{#> check-input check-input--attribute='type="checkbox" id="login-demo-checkbox" name="login-demo-checkbox"'}}{{/check-input}}
              {{#> check-label check-label--attribute='for="login-demo-checkbox"'}}Keep me logged in for 30 days.{{/check-label}}
            {{/check}}
          {{/form-group}}
          {{#> form-group form-group--modifier="pf-m-action"}}
            {{#> button button--IsPrimary=true button--IsBlock=true button--IsSubmit=true}}
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

### With language selector
```hbs isFullscreen
{{> background-image}}
{{#> login}}
  {{#> login-container}}
    {{> __login-header}}
    {{#> login-main}}
      {{> __login-main-header __login-main-header--HasLangaugeSelector="true"}}
      {{#> login-main-body}}
        {{#> form}}
          {{> form-helper-text helper-text--value='Invalid login credentials.' helper-text--IsHidden=true helper-text-item--IsError=true}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-username"' required="true"}}Username{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute='type="text" id="login-demo-form-username" name="login-demo-form-username"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> form-label form-label--attribute='for="login-demo-form-password"' required="true"}}Password{{/form-label}}
            {{#> form-control controlType="input" input="true" form-control--IsRequired='true' form-control--attribute='type="password" id="login-demo-form-password" name="login-demo-form-password"'}}{{/form-control}}
          {{/form-group}}
          {{#> form-group}}
            {{#> check}}
              {{#> check-input check-input--attribute='type="checkbox" id="login-demo-checkbox" name="login-demo-checkbox"'}}{{/check-input}}
              {{#> check-label check-label--attribute='for="login-demo-checkbox"'}}Keep me logged in for 30 days.{{/check-label}}
            {{/check}}
          {{/form-group}}
          {{#> form-group form-group--modifier="pf-m-action"}}
            {{#> button button--IsPrimary=true button--IsBlock=true button--IsSubmit=true}}
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
| `.pf-v6-c-login` | `<div>` | Initializes the login component. **Required**|
| `.pf-v6-c-login__container` | `<div>` | Positions the login component content. **Required**|
| `.pf-v6-c-login__header` | `<header>` | Positions the login header. **Required**|
| `.pf-v6-c-login__header .pf-v6-c-brand` | `<img>` | Creates a brand image inside of login header. **Required** |
| `.pf-v6-c-login__main` | `<main>` | Positions the login main area. **Required** |
| `.pf-v6-c-login__main-header` | `<div>` | Creates the header of the main area. **Required** |
| `.pf-v6-c-login__main-header .pf-v6-c-title` | `<h1>,<h2>,<h3>,<h4>,<h5>,<h6>` | Creates a title in the main header area. **Required** |
| `.pf-v6-c-login__main-header-desc` | `<p>` | Creates the description in the main area header. |
| `.pf-v6-c-login__main-header-utilities` | `<div>` | Creates a utilities section in the main header area. **Note:** For use with a language selector menu. |
| `.pf-v6-c-login__main-body` | `<div>` | Creates the body of the main area. **Required** |
| `.pf-v6-c-login__main-body .pf-v6-c-form` | `<form>` | Creates the login form in the main body area. **Required**|
| `.pf-v6-c-login__main-body .pf-v6-c-form .pf-v6-c-form-helper-text` | `<form>` | Creates the error messages shown when the form has errors. When not active, apply `.pf-m-hidden`. **Required** |
| `.pf-v6-c-login__main-footer` | `<div>` | Creates the footer of the main area. **Required** |
| `.pf-v6-c-login__main-footer-links` | `<ul>` | Creates a list of links in the main footer. **Required** |
| `.pf-v6-c-login__main-footer-links-item` | `<li>` | Creates proper spacing for links in the main footer. **Required** |
| `.pf-v6-c-login__main-footer-links-item-link` | `<a>` | Creates link in links list in footer. **Required** |
| `.pf-v6-c-login__main-footer-band` | `<div>` | Styles a band in the footer. |
| `.pf-v6-c-login__main-footer-band-item` | `<p>` | Adds information to the band in the footer. |
| `.pf-v6-c-login__footer` | `<footer>` | Positions the login footer. **Required** |
| `.pf-v6-c-login__footer .pf-v6-c-list` | `<ul>` | Creates a list of links in the login footer. **Required** |