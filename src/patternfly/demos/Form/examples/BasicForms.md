---
id: Form
section: components
---

## Demos
### Basic
```hbs
{{#> form form--id="form-demo-basic"}}
  {{#> form-group form-group--id="-name"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Name{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-describedby="' form--id form-group--id '-helper"')}}{{/form-control}}
      {{#> form-helper-text form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}Please provide your full name{{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-email"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}Email{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="email" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-phone"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Phone number{{/form-label}}
      {{> form-group-label-help}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="tel" placeholder="Example, (555) 555-5555" id="' form--id form-group--id '" name="' form--id form-group--id '" placeholder="555-555-5555"')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--IsCheckGroup="true" form-group--id="-contact"}}
    {{#> form-group-label}}
      {{#> form-label}}How can we contact you?{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control form-group-control--modifier="pf-m-inline"}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '-check-1" name="' form--id form-group--id '-check-1"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '-check-1"')}}Email{{/check-label}}
      {{/check}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '-check-2" name="' form--id form-group--id '-check-2"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '-check-2"')}}Phone{{/check-label}}
      {{/check}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '-check-3" name="' form--id form-group--id '-check-3"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '-check-3"')}}Mail{{/check-label}}
      {{/check}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--IsCheckGroup="true" form-group--IsRadioGroup="true" form-group--id="-time-zone"}}
    {{#> form-group-label}}
      {{#> form-label}}Time zone{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control form-group-control--modifier="pf-m-inline"}}
      {{#> radio}}
        {{#> radio-input radio-input--attribute=(concat 'id="' form--id form-group--id '-radio-1" name="' form--id form-group--id '-radio"')}}{{/radio-input}}
        {{#> radio-label radio-label--attribute=(concat 'for="' form--id form-group--id '-radio-1"')}}Eastern{{/radio-label}}
      {{/radio}}
      {{#> radio}}
        {{#> radio-input radio-input--attribute=(concat 'id="' form--id form-group--id '-radio-2" name="' form--id form-group--id '-radio"')}}{{/radio-input}}
        {{#> radio-label radio-label--attribute=(concat 'for="' form--id form-group--id '-radio-2"')}}Central{{/radio-label}}
      {{/radio}}
      {{#> radio}}
        {{#> radio-input radio-input--attribute=(concat 'id="' form--id form-group--id '-radio-3" name="' form--id form-group--id '-radio"')}}{{/radio-input}}
        {{#> radio-label radio-label--attribute=(concat 'for="' form--id form-group--id '-radio-3"')}}Pacific{{/radio-label}}
      {{/radio}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--modifier="pf-m-action"}}
    {{#> form-group-control}}
      {{#> form-actions}}
        {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
          Submit form
        {{/button}}
        {{#> button button--modifier="pf-m-link"}}
          Cancel
        {{/button}}
      {{/form-actions}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Horizontal
```hbs
{{#> form form--modifier="pf-m-horizontal" form--id="form-demo-horizontal"}}
  {{#> form-group form-group--modifier="-name"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Name{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-describedby="' form--id form-group--id '-helper"')}}
      {{/form-control}}
      {{#> form-helper-text form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}Please provide your full name{{/form-helper-text}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-email"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}Email{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="email" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
      {{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-phone"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}Phone number{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="tel" placeholder="Example, (555) 555-5555" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
      {{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
   {{#> form-group form-group--IsCheckGroup="true" form-group--id="-contact"}}
    {{#> form-group-label form-group-label--modifier="pf-m-no-padding-top"}}
      {{#> form-label }}How can we contact you?{{/form-label}}
      {{> form-group-label-help}}
    {{/form-group-label}}
    {{#> form-group-control form-group-control--modifier="pf-m-stack"}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '1" name="' form--id form-group--id '1"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '1"')}}Email{{/check-label}}
      {{/check}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '2" name="' form--id form-group--id '2"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '2"')}}Phone{{/check-label}}
      {{/check}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '3" name="' form--id form-group--id '3"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '3"')}}Mail{{/check-label}}
      {{/check}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--modifier="pf-m-action"}}
    {{#> form-group-control}}
      {{#> form-actions}}
        {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
          Submit form
        {{/button}}
        {{#> button button--modifier="pf-m-link"}}
          Cancel
        {{/button}}
      {{/form-actions}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### Grid
```hbs
{{#> form form--id="form-demo-grid"}}
  {{#> grid grid--modifier="pf-m-all-6-col-on-md pf-m-gutter"}}
    {{#> form-group form-group--id="-name"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Name{{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-describedby="' form--id form-group--id '-helper"')}}{{/form-control}}
        {{#> form-helper-text form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}Please provide your full name{{/form-helper-text}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-title"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Job title{{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-phone"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}Phone number{{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="tel" id="' form--id form-group--id '" name="' form--id form-group--id '" placeholder="555-555-5555"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-email"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}Email{{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="email" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-address"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}Street address{{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> grid grid--modifier="pf-m-all-6-col pf-m-gutter"}}
      {{#> form-group form-group--id="-city"}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}City{{/form-label}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
        {{/form-group-control}}
      {{/form-group}}
      {{#> form-group form-group--id="-state"}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}State{{/form-label}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="select" form-control--attribute=(concat 'id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
            <option value="" selected>Please choose</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          {{/form-control}}
        {{/form-group-control}}
      {{/form-group}}
    {{/grid}}
    {{#> form-group form-group--modifier="pf-m-action"}}
      {{#> form-group-control}}
        {{#> form-actions}}
          {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
            Submit form
          {{/button}}
          {{#> button button--modifier="pf-m-link"}}
            Cancel
          {{/button}}
        {{/form-actions}}
      {{/form-group-control}}
    {{/form-group}}
  {{/grid}}
{{/form}}
```

### Sections with repeatable fields
```hbs
{{#> form form--id="form-demo-sections-repeatable-fields"}}
  {{#> form-section}}
    {{#> form-section-title}}
      General settings
    {{/form-section-title}}
    {{#> form-group form-group--id="-clientid"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Client ID{{/form-label}}
        {{> form-group-label-help}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-name"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Name{{/form-label}}
        {{> form-group-label-help}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-description"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Description{{/form-label}}
        {{> form-group-label-help}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
  {{/form-section}}
  {{#> form-section}}
    {{#> form-section-title}}
      Access settings
    {{/form-section-title}}
    {{#> form-group form-group--id="-rooturl"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Root URL{{/form-label}}
        {{> form-group-label-help}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-uris"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'id="' form--id form-group--id '"') required="true"}}Valid redirect URIs{{/form-label}}
        {{> form-group-label-help}}
      {{/form-group-label}}
      {{#> form-group-control form-group-control--modifier="pf-m-stack"}}
        {{#> input-group}}
          {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '-input-1" name="' form--id form-group--id '-input-1" aria-labelledby="' form--id form-group--id ' ' form--id form-group--id '-input-1"')}}{{/form-control}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Remove"'}}
            <i class="fas fa-minus-circle" aria-hidden="true"></i>
          {{/button}}
        {{/input-group}}
        {{#> input-group}}
          {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '-input-2" name="' form--id form-group--id '-input-2" aria-labelledby="' form--id form-group--id ' ' form--id form-group--id '-input-2"')}}{{/form-control}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Remove"'}}
            <i class="fas fa-minus-circle" aria-hidden="true"></i>
          {{/button}}
        {{/input-group}}
        {{#> input-group}}
          {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '-input-3" name="' form--id form-group--id '-input-3" aria-labelledby="' form--id form-group--id ' ' form--id form-group--id '-input-3"')}}{{/form-control}}
          {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Remove"'}}
            <i class="fas fa-minus-circle" aria-hidden="true"></i>
          {{/button}}
        {{/input-group}}
        {{#> button button--modifier="pf-m-link pf-m-inline"}}
          {{#> button-icon button-icon--modifier="pf-m-start"}}
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          {{/button-icon}}
          Add valid redirect URI
        {{/button}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-home-url"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Home URL{{/form-label}}
        {{> form-group-label-help}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
  {{/form-section}}
{{/form}}
```
