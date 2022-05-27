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
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Full name{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-describedby="' form--id form-group--id '-helper"')}}{{/form-control}}
      {{#> form-helper-text form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}Include your middle name if you have one.{{/form-helper-text}}
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
      {{> form-group-label-help form-group-label-help--aria-label="More information for phone number field"  form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
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
          Submit
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
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Full name{{/form-label}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-describedby="' form--id form-group--id '-helper"')}}
      {{/form-control}}
      {{#> form-helper-text form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}Include your middle name if you have one.{{/form-helper-text}}
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
      {{> form-group-label-help form-group-label-help--aria-label="More information for contact field" form-group-label-help--aria-describedby=(concat form--id form-group--id '-legend')}}
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
          Submit
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
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Full name{{/form-label}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" aria-describedby="' form--id form-group--id '-helper"')}}{{/form-control}}
        {{#> form-helper-text form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}Include your middle name if you have one.{{/form-helper-text}}
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
            <option value="" selected>Select one</option>
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
            Submit
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
  {{#> form-section form-section--id=(concat form--id '-section1')}}
    {{#> form-section-title}}
      General settings
    {{/form-section-title}}
    {{#> form-group form-group--id="-clientid"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Client ID{{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for client id field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-name"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Full name{{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for full name field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-description"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Description{{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for description field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
  {{/form-section}}
  {{#> form-section form-section--id=(concat form--id '-section2')}}
    {{#> form-section-title}}
      Access settings
    {{/form-section-title}}
    {{#> form-group form-group--id="-rooturl"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Root URL{{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for root URL field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
    {{#> form-group form-group--id="-uris"}}
      {{#> form-group-label}}
        {{#> form-label form-label--attribute=(concat 'id="' form--id form-group--id '"') required="true"}}Valid redirect URIs{{/form-label}}
        {{> form-group-label-help form-group-label-help--aria-label="More information for valid redirect URIs field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
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
        {{> form-group-label-help form-group-label-help--aria-label="More information for home URL field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
      {{/form-group-label}}
      {{#> form-group-control}}
        {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '" name="' form--id form-group--id '"')}}{{/form-control}}
      {{/form-group-control}}
    {{/form-group}}
  {{/form-section}}
{{/form}}
```

### Complex form
```hbs
{{#> form form--id="form-demo-sections-complex-form"}}
  {{!-- Name field --}}
  {{#> form-group form-group--id=(concat form--id "-name")}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') required="true"}}Name{{/form-label}}
      {{> form-group-label-help form-group-label-help--aria-label="More information for name field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
    {{/form-group-label}}
    {{#> form-group-control}}
      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" required')}}{{/form-control}}
    {{/form-group-control}}
  {{/form-group}}

  {{!-- Label input --}}
  {{#> form-group form-group--id=(concat form--id "-labels")}}
    {{#> form-group-label}}
      {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"')}}Labels{{/form-label}}
      {{> form-group-label-help form-group-label-help--aria-label="More information for labels field" form-group-label-help--aria-describedby=(concat form--id form-group--id)}}
    {{/form-group-label}}
    {{#> form-group-control}}
        {{#> text-input-group text-input-group--attribute=(concat 'id="' form--id form-group--id '"')}}
          {{#> text-input-group-main}}
          {{#> label-group}}
            {{#> label-group-main}}
              {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
                {{#> label-group-list-item}}
                  {{#> label  label--isRemovable="true" label--id=(concat label-group--id '-label-1')}}
                    {{#> label-icon}}
                      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                    {{/label-icon}}
                    prometheus=k8s
                  {{/label}}
                {{/label-group-list-item}}
                {{#> label-group-list-item}}
                  {{#> label label--modifier="pf-m-blue" label--isRemovable="true" label--id=(concat label-group--id '-label-2')}}
                    {{#> label-icon}}
                      <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                    {{/label-icon}}
                    new
                  {{/label}}
                {{/label-group-list-item}}
                {{#> label-group-list-item}}
                  {{#> label label--IsAdd="true"}}
                    Add Label
                  {{/label}}
                {{/label-group-list-item}}
              {{/label-group-list}}
            {{/label-group-main}}
          {{/label-group}}
              {{#> text-input-group-text}}
      {{> text-input-group-text-input}}
    {{/text-input-group-text}}
            {{/text-input-group-main}}
        {{/text-input-group}} 
    {{/form-group-control}}
  {{/form-group}}

  {{!-- Alerting field group --}}
  {{#> form-field-group form-field-group--id=(concat form--id '-alerting') form-field-group--IsExpandable="true" }}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text}}Alerting{{/form-field-group-title-text}}
        {{/form-field-group-title}}
        {{#> form-field-group-header-description}}
          Define details regarding alerting.
        {{/form-field-group-header-description}}
      {{/form-field-group-header-main}}
    {{/form-field-group-header}}
  {{/form-field-group}}

  {{!-- Query field group --}}
  {{#> form-field-group form-field-group--id=(concat form--id '-query') form-field-group--IsExpandable="true" }}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text}}Query{{/form-field-group-title-text}}
        {{/form-field-group-title}}
        {{#> form-field-group-header-description}}
          The query specification defines the query command line flags when starting.
        {{/form-field-group-header-description}}
      {{/form-field-group-header-main}}
    {{/form-field-group-header}}
  {{/form-field-group}}
  
  {{!-- Affinity field group --}}
  {{#> form-field-group form-field-group--id=(concat form--id '-affinity') form-field-group--IsExpandable="true" }}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text}}Affinity{{/form-field-group-title-text}}
        {{/form-field-group-title}}
        {{#> form-field-group-header-description}}
          If specified, the pod's scheduling constraints.
        {{/form-field-group-header-description}}
      {{/form-field-group-header-main}}
    {{/form-field-group-header}}
    {{#> form-field-group-body}}

      {{!-- nested Node Affinity field group --}}
      {{#> form-field-group form-field-group--id=(concat form--id '-node-affinity') form-field-group--IsExpandable="true" form-field-group--IsExpanded="true"}}
        {{#> form-field-group-header}}
          {{#> form-field-group-header-main}}
            {{#> form-field-group-title}}
              {{#> form-field-group-title-text form-field-group-title-text--attribute=(concat 'id="' form-field-group--id '-title"')}}Node affinity{{/form-field-group-title-text}}
            {{/form-field-group-title}}
            {{#> form-field-group-header-description}}
              Describes node affinity scheduling rules for the pod.
            {{/form-field-group-header-description}}
          {{/form-field-group-header-main}}
        {{/form-field-group-header}}
        {{#> form-field-group-body}}

          {{!-- additional level nested field group --}}
          {{#> form-field-group form-field-group--id=(concat form--id '-node-affinity-required') form-field-group--IsExpandable="true" form-field-group--IsExpanded=reset}}
            {{#> form-field-group-header}}
              {{#> form-field-group-header-main}}
                {{#> form-field-group-title}}
                  {{#> form-field-group-title-text form-field-group-title-text--attribute=(concat 'id="' form-field-group--id '-title"')}}Required during scheduling, ignored during execution{{/form-field-group-title-text}}
                {{/form-field-group-title}}
                {{#> form-field-group-header-description}}
                  The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements.
                {{/form-field-group-header-description}}
              {{/form-field-group-header-main}}
            {{/form-field-group-header}}
          {{/form-field-group}}

          {{!-- second additional level nested field group --}}
          {{#> form-field-group form-field-group--id=(concat form--id '-node-affinity-required-2') form-field-group--IsExpandable="true" form-field-group--IsExpanded="true"}}
            {{#> form-field-group-header}}
              {{#> form-field-group-header-main}}
                {{#> form-field-group-title}}
                  {{#> form-field-group-title-text form-field-group-title-text--attribute=(concat 'id="' form-field-group--id '-title"')}}Required during scheduling, ignored during execution{{/form-field-group-title-text}}
                {{/form-field-group-title}}
                {{#> form-field-group-header-description}}
                  The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements.
                {{/form-field-group-header-description}}
              {{/form-field-group-header-main}}
            {{/form-field-group-header}}
            {{#> form-field-group-body}}

              {{!-- node selector terms (repeating field) --}}
              {{#> form-section form-section--id=(concat form--id '-node-selector-terms')}}

                {{!-- node selector terms multiple inputs --}}
                {{#> form-group form-group--id="-node-selector-terms"}}
                  {{#> form-group-label}}
                    {{#> form-label form-label--attribute=(concat 'id="' form--id form-group--id '-title"') required="true"}}Node selector terms{{/form-label}}
                  {{/form-group-label}}
                  {{#> form-group-control form-group-control--modifier="pf-m-stack"}}
                    {{#> input-group}}
                      {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'required type="text" id="' form--id form-group--id '-input-1" name="' form--id form-group--id '-input-1" aria-labelledby="' form--id form-group--id ' ' form--id form-group--id '-title"')}}{{/form-control}}
                      {{!-- {{#> form-helper-text form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}} --}}
                      {{!-- Required. A list of node selector terms. The terms are ORed. --}}
                      {{!-- {{/form-helper-text}} --}}
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

              {{/form-section}}

            {{/form-field-group-body}}
          {{/form-field-group}}

        {{/form-field-group-body}}
      {{/form-field-group}}{{!-- nested Node Affinity field group --}}

      {{!-- nested Node Pod field group --}}
      {{#> form-field-group form-field-group--id=(concat form--id '-pod-affinity') form-field-group--IsExpandable="true"}}
        {{#> form-field-group-header}}
          {{#> form-field-group-header-main}}
            {{#> form-field-group-title}}
              {{#> form-field-group-title-text form-field-group-title-text--attribute=(concat 'id="' form-field-group--id '-title"')}}Pod affinity{{/form-field-group-title-text}}
            {{/form-field-group-title}}
            {{#> form-field-group-header-description}}
              Describes pod affinity scheduling rules (e.g. co-locate the pod in the same node, zone, etc. as some other pods).
            {{/form-field-group-header-description}}
          {{/form-field-group-header-main}}
        {{/form-field-group-header}}
      {{/form-field-group}}{{!-- nested Pod Affinity field group --}}


    {{/form-field-group-body}}
  {{/form-field-group}}{{!-- Affinity field group --}}
  
  {{!-- Routing field group --}}
  {{#> form-field-group form-field-group--id=(concat form--id '-routing') form-field-group--IsExpandable="true" form-field-group--IsExpanded="true"}}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text form-field-group-title-text--attribute=(concat 'id="' form-field-group--id '-title"')}}Routing{{/form-field-group-title-text}}
        {{/form-field-group-title}}
      {{/form-field-group-header-main}}
    {{/form-field-group-header}}
    {{#> form-field-group-body}}
      {{!-- create route checkbox --}}
      {{#> form-group form-group--IsCheckGroup="true" form-group--id=(concat form-field-group--id "-create-route")}}
        {{#> form-group-control}}
          {{#> check}}
            {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '-create-route" name="' form--id form-group--id '-create-route"')}}{{/check-input}}
            {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '-create-route"')}}Create a route to the application{{/check-label}}
          {{/check}}
          {{#> form-helper-text form-helper-text--type="div" form-helper-text--attribute=(concat 'id="' form--id form-group--id '-legend" aria-live="polite"')}}
            {{#> helper-text}}
              {{#> helper-text-item}}
                {{#> helper-text-item-text}}Exposes your appplication at a public URL.{{/helper-text-item-text}}
              {{/helper-text-item}}
            {{/helper-text}}
          {{/form-helper-text}}
        {{/form-group-control}}
      {{/form-group}}
      {{!-- hostname input --}}
      {{#> form-group form-group--id=(concat form-field-group--id "-hostname")}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') }}Hostname{{/form-label}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" id="' form--id form-group--id '" name="' form--id form-group--id '" ')}}{{/form-control}}
          {{#> form-helper-text form-helper-text--type="div" form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}
            {{#> helper-text}}
              {{#> helper-text-item}}
                {{#> helper-text-item-text}}Public hostname for the route. If not specified, a hostname is generated.{{/helper-text-item-text}}
              {{/helper-text-item}}
            {{/helper-text}}
          {{/form-helper-text}}
        {{/form-group-control}}
      {{/form-group}}
      {{!-- path input with placeholder --}}
      {{#> form-group form-group--id=(concat form-field-group--id "-path")}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') }}Path{{/form-label}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="text" placeholder="/" id="' form--id form-group--id '" name="' form--id form-group--id '" required')}}{{/form-control}}
          {{#> form-helper-text form-helper-text--type="div" form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}
            {{#> helper-text}}
              {{#> helper-text-item}}
                {{#> helper-text-item-text}}Path that the router watches to route traffic to the service.{{/helper-text-item-text}}
              {{/helper-text-item}}
            {{/helper-text}}
          {{/form-helper-text}}
        {{/form-group-control}}
      {{/form-group}}
      {{!-- security checkbox --}}
      {{#> form-group form-group--IsCheckGroup="true" form-group--id=(concat form-field-group--id "-security")}}
        {{#> form-group-label}}
          {{#> form-label form-label--attribute=(concat 'for="' form--id form-group--id '"') }}Security{{/form-label}}
        {{/form-group-label}}
        {{#> form-group-control}}
          {{#> check}}
            {{#> check-input check-input--attribute=(concat 'type="checkbox" id="' form--id form-group--id '-check-1" name="' form--id form-group--id '-check-1"')}}{{/check-input}}
            {{#> check-label check-label--attribute=(concat 'for="' form--id form-group--id '-check-1"')}}Secure Route{{/check-label}}
          {{/check}}
          {{#> form-helper-text form-helper-text--type="div" form-helper-text--attribute=(concat 'id="' form--id form-group--id '-helper" aria-live="polite"')}}
            {{#> helper-text}}
              {{#> helper-text-item}}
                {{#> helper-text-item-text}}Routes can be secured using several TLS termination types for serving certificates.{{/helper-text-item-text}}
              {{/helper-text-item}}
            {{/helper-text}}
          {{/form-helper-text}}
        {{/form-group-control}}
      {{/form-group}}
    {{/form-field-group-body}}
  {{/form-field-group}}

  {{!-- Health checks field group --}}
  {{#> form-field-group form-field-group--id=(concat form--id '-health-checks') form-field-group--IsExpandable="true" form-field-group--IsExpanded="true"}}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text form-field-group-title-text--attribute=(concat 'id="' form-field-group--id '-title"')}}Health checks{{/form-field-group-title-text}}
        {{/form-field-group-title}}
      {{/form-field-group-header-main}}
    {{/form-field-group-header}}
    {{#> form-field-group-body}}
      {{!-- Readiness non-expandable field group --}}
      {{#> form-field-group form-field-group--id=(concat form--id '-readiness') form-field-group--IsExpandable=reset}}
        {{#> form-field-group-header}}
          {{#> form-field-group-header-main}}
            {{#> form-field-group-title}}
              {{#> form-field-group-title-text}}Readiness probe{{/form-field-group-title-text}}
            {{/form-field-group-title}}
            {{#> form-field-group-header-description}}
              A readiness probe checks if the container is ready to handle requests. A failed readiness probe means that a container should not receive any traffic from a proxy, even if it's running.
            {{/form-field-group-header-description}}
          {{/form-field-group-header-main}}
        {{/form-field-group-header}}
        {{#> form-field-group-body}}
          {{#> form-group form-group--id=(concat form-field-group--id "-add-readiness")}}

            {{#> form-group-control}}
                    {{#> button button--modifier="pf-m-link pf-m-inline"}}
                      {{#> button-icon button-icon--modifier="pf-m-start"}}
                        <i class="fas fa-plus-circle" aria-hidden="true"></i>
                      {{/button-icon}}
                      Add liveness probe
                    {{/button}}
            {{/form-group-control}}
          {{/form-group}}

        {{/form-field-group-body}}
      {{/form-field-group}}
      {{!-- Startup probe non-expandable field group --}}
      {{#> form-field-group form-field-group--id=(concat form--id '-startup') form-field-group--IsExpandable=reset}}
        {{#> form-field-group-header}}
          {{#> form-field-group-header-main}}
            {{#> form-field-group-title}}
              {{#> form-field-group-title-text}}Liveness probe{{/form-field-group-title-text}}
            {{/form-field-group-title}}
            {{#> form-field-group-header-description}}
              A startup probe checks if the application within the container is started.
            {{/form-field-group-header-description}}
          {{/form-field-group-header-main}}
        {{/form-field-group-header}}
        {{#> form-field-group-body}}
          {{#> form-group form-group--id=(concat form-field-group--id "-add-startup")}}

            {{#> form-group-control}}
                    {{#> button button--modifier="pf-m-link pf-m-inline"}}
                      {{#> button-icon button-icon--modifier="pf-m-start"}}
                        <i class="fas fa-plus-circle" aria-hidden="true"></i>
                      {{/button-icon}}
                      Add startup probe
                    {{/button}}
            {{/form-group-control}}
          {{/form-group}}

        {{/form-field-group-body}}
      {{/form-field-group}}
    {{/form-field-group-body}}
  {{/form-field-group}}

  {{!-- Build configuration --}}
  {{#> form-field-group form-field-group--id=(concat form--id '-build-configuration') form-field-group--IsExpandable="true"}}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text}}Build configuration{{/form-field-group-title-text}}
        {{/form-field-group-title}}
      {{/form-field-group-header-main}}
      {{#> form-field-group-header-actions}}
        {{#> button button--modifier="pf-m-secondary"}}
          Import
        {{/button}}
      {{/form-field-group-header-actions}}
    {{/form-field-group-header}}
  {{/form-field-group}}

  {{!-- Deployment --}}
  {{#> form-field-group form-field-group--id=(concat form--id '-deployment') form-field-group--IsExpandable="true"}}
    {{#> form-field-group-header}}
      {{#> form-field-group-header-main}}
        {{#> form-field-group-title}}
          {{#> form-field-group-title-text}}Deployment{{/form-field-group-title-text}}
        {{/form-field-group-title}}
      {{/form-field-group-header-main}}
    {{/form-field-group-header}}
  {{/form-field-group}}

  {{!-- Form action buttons --}}
  {{#> form-actions}}
    {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
      Save
    {{/button}}
    {{#> button button--modifier="pf-m-secondary" button--IsReset="true"}}
      Cancel
    {{/button}}
  {{/form-actions}}
{{/form}}
```