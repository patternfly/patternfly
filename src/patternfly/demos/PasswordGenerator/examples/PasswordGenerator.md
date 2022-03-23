---
id: 'Password generator'
section: demos
---

## Examples

### Provide a generated password

```hbs
{{#> form form--id="password-generator-demo--initial"}}
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
          {{#> form-control controlType="input" input="true"  form-control--attribute=(concat 'required type="password" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-label="Password input" value="" placeholder="Password"')}}
        {{/form-control}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Show password"'}}
          <i class="fas fa-eye" aria-hidden="true"></i>
        {{/button}}
      {{/input-group}}
      {{#> menu}}
        {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Use suggested password: fqu9kKe676JmKt2
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
                {{#> menu-item-action menu-item-action--attribute='aria-label="Generate a new suggested password"'}}
                  <i class="fas fa-fw fa-redo" aria-hidden="true"></i>
                {{/menu-item-action}}
              {{/menu-list-item}}
            {{/menu-list}}
        {{/menu-content}}
      {{/menu}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

## Documentation

This demo shows how to use a menu in conjunction with a form input to provide a generated password and an associated button for refresh.
