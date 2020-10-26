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
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Email{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="email" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
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
  {{#> form-group form-group--id="-contact"}}
    {{#> form-group-label}}
      {{#> form-label required="true"}}How can we contact you?{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control form-group-control--modifier="pf-m-inline"}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="radio" id="' form--id form-group--id '1" name="' form--id form-group--id '1"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '1"')}}Email{{/check-label}}
      {{/check}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="radio" id="' form--id form-group--id '2" name="' form--id form-group--id '2"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '2"')}}Phone{{/check-label}}
      {{/check}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="radio" id="' form--id form-group--id '3" name="' form--id form-group--id '3"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '3"')}}Please don't contact me{{/check-label}}
      {{/check}}
  {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-updates"}}
    {{#> form-group-control}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '"')}}I'd like updates via email{{/check-label}}
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
  {{#> form-group form-group--id="-title"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}Your title{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="select" form-control--attribute=(concat 'id="' form--id form-group--id '" name="' form--id form-group--id '"')}}
        <option value="" selected>Please choose</option>
        <option value="Mr">Mr</option>
        <option value="Miss">Miss</option>
        <option value="Mrs">Mrs</option>
        <option value="Ms">Ms</option>
        <option value="Dr">Dr</option>
        <option value="Other">Other</option>
      {{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-exp"}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}Your experience{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="textarea" form-control--attribute=(concat 'name="' form--id form-group--id '" id="' form--id form-group--id '"')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-follow-up"}}
    {{#> form-group-control}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '"')}}Follow up via email{{/check-label}}
      {{/check}}
    {{/form-group-control}}
  {{/form-group}}
  {{#> form-group form-group--id="-remember"}}
    {{#> form-group-control}}
      {{#> check}}
        {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/check-input}}
        {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '"')}}Remember my password for 30 days{{/check-label}}
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
