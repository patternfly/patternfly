---
id: 'Truncate'
beta: true
section: components
cssPrefix: pf-c-truncate
---

## Examples

### Notes
The truncate component contains to child elements, `.pf-c-truncate__start` and `.pf-c-truncate__end`. If both `start` and `end` are present within `.pf-c-truncate`, trucation will occur in the middle of the string. If only `.pf-c-truncate__start` is present, truncation will occur at the end of the string. If only `.pf-c-truncate__end` is present, truncation will occur at the beginning of the string. A `.pf-c-popover` will be automatically applied to the PatternFly React implementation. `&lrm;` must be included at the end of string to denote the ending punctuation mark. Otherwise it will occur and the beggining of truncation for a `pf-c-truncate__end` element.

### Default
```hbs
<div style="width: 120px">
  {{#> truncate truncate--id="default-truncation-example"}}
    {{> truncate-start truncate-start--text="Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan."}}
  {{/truncate}}
</div>
```

### Middle
```hbs
<div style="width: 220px">
  {{#> truncate truncate--id="middle-of-line-truncation-example"}}
    {{> truncate-start truncate-start--text="Vestibulum interdum risus et enim"}}
    {{> truncate-end truncate-end--text="faucibus, sit amet molestie est accumsan.&lrm;"}}
  {{/truncate}}
</div>
```

### Start
```hbs
<div style="width: 120px">
  {{#> truncate truncate--id="start-truncation-example"}}
    {{> truncate-end truncate-end--text="Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.&lrm;"}}
  {{/truncate}}
</div>
```

### In text
```hbs
<div style="width: 420px">
  {{#> content}}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at lacus quis urna auctor sagittis sed vitae tellus. Morbi fringilla purus leo, molestie eleifend enim convallis in. Nam justo justo, interdum at efficitur a, posuere at mauris.
      {{#> truncate truncate--id="basic-middle-of-line-truncation-example" truncate--modifier="pf-u-default-color-200"}}
        {{> truncate-start truncate-start--text="Vestibulum interdum risus et enim"}}
        {{> truncate-end truncate-end--text="faucibus, sit amet molestie est accumsan.&lrm;"}}
      {{/truncate}} Cras tincidunt rhoncus massa, ac consectetur purus luctus nec. Vestibulum imperdiet turpis sed elit facilisis, at ultrices eros tempor. Curabitur porta dolor malesuada accumsan varius. Quisque ut accumsan nulla. Curabitur ac libero est.
    </p>
    <p>
      Vestibulum efficitur et leo in mollis. Nullam quis enim est. Sed blandit libero et viverra varius. Nulla placerat, nisl vitae interdum aliquam, sem mauris sagittis tellus, varius consectetur ligula sapien id nulla. Donec ultrices sed purus nec interdum. Duis egestas dui quam, nec rutrum nisl varius eu. Integer tempus sem orci, ut mollis leo consequat vel. Mauris euismod nisi nunc, a aliquet ipsum imperdiet at. Ut et nunc dignissim, pulvinar metus nec, volutpat velit. Proin eu ante cursus, blandit ipsum in, cursus erat. Maecenas ornare commodo condimentum. Pellentesque est libero, pulvinar iaculis efficitur quis, cursus et felis. Aliquam erat volutpat. Nulla eu dolor vel dui congue vulputate. Maecenas in ex dui. Nulla in erat pulvinar metus ullamcorper aliquam id non quam.
    </p>

    <p>
      Donec bibendum volutpat ex, non ultrices enim tempor ut. Aliquam at metus at lacus sodales pretium interdum quis est. Donec tincidunt elit at cursus finibus. Aenean suscipit cursus justo, id facilisis ex ultrices sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec a orci odio. Nam pharetra felis at ligula ornare, vel pretium elit volutpat. Pellentesque lacinia nisi sit amet ex finibus efficitur. Cras interdum rutrum sem non eleifend. Proin velit nunc, aliquam id nisl vitae, malesuada gravida ante. Vivamus placerat libero sed porttitor consectetur.
    </p>
  {{/content}}
</div>
```

## Documentation

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-truncate` | `<span>` | Initiates the truncate component. |
| `.pf-c-truncate__start` | `<span>` | Defines the truncate component starting text. |
| `.pf-c-truncate__end` | `<span>` | Defines the truncate component ending text. |
