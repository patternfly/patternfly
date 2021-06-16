---
id: 'Password strength'
beta: true
section: demos
---

## Examples

### Initial state
```hbs
  {{#> form form--id="password-strength-demo--initial"}}
    {{#> form-group}}
      {{#> form-group-label}}
        {{#> split split--modifier="pf-m-gutter"}}
          {{#> split-item split-item--modifier="pf-m-fill"}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id '-password"') required="true"}}Password{{/form-label}}
          {{/split-item}}
          {{#> split-item}}
          {{/split-item}}
        {{/split}}
      {{/form-group-label}}
      {{#> input-group}}
          {{#> form-control controlType="input" input="true"  form-control--attribute=(concat 'type="text" id="' form--id '-password" name="' form--id '-password" aria-label="Password input" value="" placeholder="Password"')}}
        {{/form-control}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password button for password input"'}}
          <i class="fas fa-eye-slash" aria-hidden="true"></i>
        {{/button}}
      {{/input-group}}
      {{#> form-helper-text form-helper-text--type="div"}}
        {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
          {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-indeterminate"}}
            {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
            {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
          {{/helper-text-item}}
          {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-indeterminate"}}
            {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
            {{#> helper-text-item-text}}Cannot contain any variation of the work "redhat"{{/helper-text-item-text}}
          {{/helper-text-item}}
          {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-indeterminate"}}
            {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
            {{#> helper-text-item-text}}Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols{{/helper-text-item-text}}
          {{/helper-text-item}}
        {{/helper-text}}
      {{/form-helper-text}}
    {{/form-group}}
  {{/form}}
```

### Invalid password
```hbs
  {{#> form  form--id="password-strength-demo--invalid"}}
    {{#> form-group}}
      {{#> form-group-label}}
        {{#> split split--modifier="pf-m-gutter"}}
          {{#> split-item split-item--modifier="pf-m-fill"}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id '-password"') required="true"}} Password{{/form-label}}
          {{/split-item}}
          {{#> split-item}}
          {{/split-item}}
        {{/split}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> input-group}}
          {{#> form-control controlType="input" input="true"  form-control--attribute=(concat 'type="text" id="' form--id '-password" name="' form--id '-password" aria-label="Password input" value="Marie$RedHat78" placeholder="Password"')}}
          {{/form-control}}
          {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password button for password input"'}}
            <i class="fas fa-eye-slash" aria-hidden="true"></i>
          {{/button}}
        {{/input-group}}
        {{#> form-helper-text form-helper-text--type="div"}}
          {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check"}}
              {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
            {{/helper-text-item}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-error"}}
              {{> helper-text-item-icon helper-text-item-icon--type="times"}}
              {{#> helper-text-item-text}}Cannot contain any variation of the work "redhat"{{/helper-text-item-text}}
            {{/helper-text-item}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check"}}
              {{#> helper-text-item-text}}Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols{{/helper-text-item-text}}
            {{/helper-text-item}}
          {{/helper-text}}
        {{/form-helper-text}}
      {{/form-group-control}}
    {{/form-group}}
  {{/form}}
```

### Valid, weak password
```hbs
  {{#> form  form--id="password-strength-demo--weak"}}
    {{#> form-group}}
      {{#> form-group-label}}
        {{#> split split--modifier="pf-m-gutter"}}
          {{#> split-item split-item--modifier="pf-m-fill"}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id '-password"') required="true"}} Password{{/form-label}}
          {{/split-item}}
          {{#> split-item}}
            {{#> helper-text}}
              {{#> helper-text-item helper-text-item--modifier="pf-m-error"}}
                {{> helper-text-item-icon helper-text-item-icon--type="exclamation-circle"}}
                {{#> helper-text-item-text}}Weak{{/helper-text-item-text}}
              {{/helper-text-item}}
            {{/helper-text}}
          {{/split-item}}
        {{/split}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> input-group}}
          {{#> form-control controlType="input" input="true"  form-control--attribute=(concat 'type="text" id="' form--id '-password" name="' form--id '-password" aria-label="Password input" value="Marie$Can3Read" placeholder="Password"')}}
          {{/form-control}}
          {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password button for password input"'}}
            <i class="fas fa-eye-slash" aria-hidden="true"></i>
          {{/button}}
        {{/input-group}}
        {{#> form-helper-text form-helper-text--type="div"}}
          {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check"}}
              {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
            {{/helper-text-item}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check"}}
              {{#> helper-text-item-text}}Cannot contain any variation of the work "redhat"{{/helper-text-item-text}}
            {{/helper-text-item}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check"}}
              {{#> helper-text-item-text}}Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols{{/helper-text-item-text}}
            {{/helper-text-item}}
          {{/helper-text}}
        {{/form-helper-text}}
      {{/form-group-control}}
    {{/form-group}}
  {{/form}}
```

### Valid, strong password
```hbs
  {{#> form  form--id="password-strength-demo--strong"}}
    {{#> form-group}}
      {{#> form-group-label}}
        {{#> split split--modifier="pf-m-gutter"}}
          {{#> split-item split-item--modifier="pf-m-fill"}}
            {{#> form-label form-label--attribute=(concat 'for="' form--id '-password"') required="true"}} Password{{/form-label}}
          {{/split-item}}
          {{#> split-item}}
            {{#> helper-text}}
              {{#> helper-text-item helper-text-item--modifier="pf-m-success"}}
                {{> helper-text-item-icon helper-text-item-icon--type="check-circle"}}
                {{#> helper-text-item-text}}Strong{{/helper-text-item-text}}
              {{/helper-text-item}}
            {{/helper-text}}
          {{/split-item}}
        {{/split}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> input-group}}
          {{#> form-control controlType="input" input="true"  form-control--attribute=(concat 'type="text" id="' form--id '-password" name="' form--id '-password" aria-label="Password input" value="Marie$Can8Read3Pass@Word" placeholder="Password"')}}
          {{/form-control}}
          {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password button for password input"'}}
            <i class="fas fa-eye-slash" aria-hidden="true"></i>
          {{/button}}
        {{/input-group}}
        {{#> form-helper-text form-helper-text--type="div"}}
          {{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check"}}
              {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
            {{/helper-text-item}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check"}}
              {{#> helper-text-item-text}}Cannot contain any variation of the work "redhat"{{/helper-text-item-text}}
            {{/helper-text-item}}
            {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
              {{> helper-text-item-icon helper-text-item-icon--type="check"}}
              {{#> helper-text-item-text}}Must include at least 3 of the following: lowercase letters, uppercase letters, numbers, symbols{{/helper-text-item-text}}
            {{/helper-text-item}}
          {{/helper-text}}
        {{/form-helper-text}}
      {{/form-group-control}}
    {{/form-group}}
  {{/form}}
```

## Documentation

This demo implements a password strength meter. It uses multiple helper text items in the form helper text area below the input field to indicate whether the password meets validity criteria. Once the validity criteria are met, it also places helper text above the input field to indicate the strength of the password.