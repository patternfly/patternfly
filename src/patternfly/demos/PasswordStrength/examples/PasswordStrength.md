---
id: 'Password strength'
section: components
---

## Examples

### Initial state
```hbs
{{#> form form--id="password-strength-demo--initial"}}
  {{#> form-group form-group--id="-password"}}
    {{#> form-group-label form-group-label-info="true"}}
      {{#> form-group-label-main}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Password{{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for password field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label-main}}
      {{#> form-group-label-info}}
      {{/form-group-label-info}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> input-group}}
        {{#> input-group-item input-group-item--IsFill=true}}
          {{> form-control controlType="input" input="true"  form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-label="Password input" value="" placeholder="Password"')}}
        {{/input-group-item}}
        {{#> input-group-item}}
          {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password"'}}
            <i class="fas fa-eye-slash" aria-hidden="true"></i>
          {{/button}}
        {{/input-group-item}}
      {{/input-group}}
      {{#> form-helper-text form-helper-text--type="div"}}
        {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
          {{> helper-text-item helper-text--value='Must be at least 14 characters' helper-text-item--IsDynamic=true helper-text-item--IsIndeterminate=true}}
          {{> helper-text-item helper-text--value='Cannot contain the word "redhat"' helper-text-item--IsDynamic=true helper-text-item--IsIndeterminate=true}}
          {{> helper-text-item helper-text--value='Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols' helper-text-item--IsDynamic=true helper-text-item--IsIndeterminate=true}}
        {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Invalid password
```hbs
{{#> form  form--id="password-strength-demo--invalid"}}
  {{#> form-group form-group--id="-password"}}
    {{#> form-group-label form-group-label-info="true"}}
      {{#> form-group-label-main}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Password{{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for password field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label-main}}
      {{#> form-group-label-info}}
      {{/form-group-label-info}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> input-group}}
        {{#> input-group-item input-group-item--IsFill=true}}
          {{> form-control controlType="input" input="true"  form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-label="Password input" value="Marie$RedHat78" placeholder="Password"')}}
        {{/input-group-item}}
        {{#> input-group-item}}
          {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password"'}}
            <i class="fas fa-eye-slash" aria-hidden="true"></i>
          {{/button}}
        {{/input-group-item}}
      {{/input-group}}
      {{#> form-helper-text form-helper-text--type="div"}}
        {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
          {{> helper-text-item helper-text--value='Must be at least 14 characters' helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
          {{> helper-text-item helper-text--value='Cannot contain the word "redhat"' helper-text-item--IsDynamic=true helper-text-item--IsError=true}}
          {{> helper-text-item helper-text--value='Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols' helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
        {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Valid, weak password
```hbs
{{#> form  form--id="password-strength-demo--weak"}}
  {{#> form-group form-group--id="-password"}}
    {{#> form-group-label form-group-label-info="true"}}
      {{#> form-group-label-main}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Password{{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for password field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label-main}}
      {{#> form-group-label-info}}
        {{> helper-text helper-text--value='Weak' helper-text-item--IsError=true}}
      {{/form-group-label-info}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> input-group}}
        {{#> input-group-item input-group-item--IsFill=true}}
          {{> form-control controlType="input" input="true"  form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-label="Password input" value="Marie$Can3Read" placeholder="Password"')}}
        {{/input-group-item}}
        {{#> input-group-item}}
          {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password"'}}
            <i class="fas fa-eye-slash" aria-hidden="true"></i>
          {{/button}}
        {{/input-group-item}}
      {{/input-group}}
      {{#> form-helper-text form-helper-text--type="div"}}
        {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
          {{> helper-text-item helper-text--value='Must be at least 14 characters' helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
          {{> helper-text-item helper-text--value='Cannot contain the word "redhat"' helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
          {{> helper-text-item helper-text--value='Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols' helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
        {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Valid, strong password
```hbs
{{#> form  form--id="password-strength-demo--strong"}}
  {{#> form-group form-group--id="-password"}}
    {{#> form-group-label form-group-label-info="true"}}
      {{#> form-group-label-main}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Password{{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for password field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label-main}}
      {{#> form-group-label-info}}
        {{> helper-text helper-text--value="Strong" helper-text-item--IsSuccess=true}}
      {{/form-group-label-info}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> input-group}}
        {{#> input-group-item input-group-item--IsFill=true}}
          {{> form-control controlType="input" input="true"  form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-label="Password input" value="Marie$Can8Read3Pass@Word" placeholder="Password"')}}
        {{/input-group-item}}
        {{#> input-group-item}}
          {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password"'}}
            <i class="fas fa-eye-slash" aria-hidden="true"></i>
          {{/button}}
        {{/input-group-item}}
      {{/input-group}}
      {{#> form-helper-text form-helper-text--type="div"}}
        {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
          {{> helper-text-item helper-text--value='Must be at least 14 characters' helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
          {{> helper-text-item helper-text--value='Cannot contain the word "redhat"' helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
          {{> helper-text-item helper-text--value='Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols' helper-text-item--IsDynamic=true helper-text-item--IsSuccess=true}}
        {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

## Documentation

This demo implements a password strength meter. It uses multiple helper text items in the form helper text area below the input field to indicate whether the password meets validity criteria. Once the validity criteria are met, it also places helper text in the info area above the input field to indicate the strength of the password.
