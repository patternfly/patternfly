---
title: Tree view
section: components
cssPrefix: pf-c-tree-view
---

## Examples
```hbs title=Default
{{#> tree-view}}
    {{#> tree-view-list}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
            {{/tree-view-link}}
            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 1
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-current"}}
                                {{#> tree-view-link-text}}
                                    Current
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                        {{> tree-view-link-toggle}}
                                        {{#> tree-view-link-text}}
                                            Loading app 1
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> tree-view-link-text}}
                                            Loader app 2
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> tree-view-link-text}}
                                            Loader app 3
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                            {{/tree-view-list}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
            {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    This is a really really really long folder name that overflows from the width of the container.
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
    {{/tree-view-list}}
{{/tree-view}}
```

```hbs title=With-search
{{#> tree-view}}
    {{#> tree-view-search}}
        {{#> form-control controlType="input" input="true" form-control--modifier="pf-m-search" form-control--attribute='type="search" id="input-search" name="search-input" aria-label="Search input example"'}}
        {{/form-control}}
    {{/tree-view-search}}
    {{> divider}}
    {{#> tree-view-list}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
            {{/tree-view-link}}
            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 1
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-current"}}
                                {{#> tree-view-link-text}}
                                    Current
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                        {{> tree-view-link-toggle}}
                                        {{#> tree-view-link-text}}
                                            Loading app 1
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> tree-view-link-text}}
                                            Loader app 2
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> tree-view-link-text}}
                                            Loader app 3
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                            {{/tree-view-list}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
            {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    This is a really really really long folder name that overflows from the width of the container.
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
    {{/tree-view-list}}
{{/tree-view}}
```

```hbs title=With-checkboxes
{{#> tree-view}}
    {{#> tree-view-list}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                {{> tree-view-link-toggle}}
                {{#> check}}
                    {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                {{/check}}
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
            {{/tree-view-link}}
            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> check}}
                            {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                        {{/check}}
                        {{#> tree-view-link-text}}
                            Application 1
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link}}
                                {{#> check}}
                                    {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                                {{/check}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-current"}}
                                {{#> check}}
                                    {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                                {{/check}}
                                {{#> tree-view-link-text}}
                                    Current
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> check}}
                            {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                        {{/check}}
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                {{> tree-view-link-toggle}}
                                {{#> check}}
                                    {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                                {{/check}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                                {{> tree-view-link-toggle}}
                                {{#> check}}
                                    {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                                {{/check}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                        {{> tree-view-link-toggle}}
                                        {{#> check}}
                                            {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                                        {{/check}}
                                        {{#> tree-view-link-text}}
                                            Loading app 1
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> check}}
                                            {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                                        {{/check}}
                                        {{#> tree-view-link-text}}
                                            Loader app 2
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> check}}
                                            {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                                        {{/check}}
                                        {{#> tree-view-link-text}}
                                            Loader app 3
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                            {{/tree-view-list}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
            {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> check}}
                    {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                {{/check}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                    {{#> check}}
                        {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                    {{/check}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                    {{#> check}}
                        {{#> check-input check-input--attribute='id="check" name="check"'}}{{/check-input}}
                    {{/check}}
                {{#> tree-view-link-text}}
                    This is a really really really long folder name that overflows from the width of the container.
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
    {{/tree-view-list}}
{{/tree-view}}
```

```hbs title=With-icons
{{#> tree-view}}
    {{#> tree-view-list}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                {{> tree-view-link-toggle}}
                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true" tree-view-link-icon--IsExpanded="true"}}
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
            {{/tree-view-link}}
            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{> tree-view-link-icon tree-view-link-icon--IsFolder="true" tree-view-link-icon--IsExpanded="true"}}
                        {{#> tree-view-link-text}}
                            Application 1
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-current"}}
                                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                                {{#> tree-view-link-text}}
                                    Current
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{> tree-view-link-icon tree-view-link-icon--IsFolder="true" tree-view-link-icon--IsExpanded="true"}}
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                {{> tree-view-link-toggle}}
                                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                                {{> tree-view-link-toggle}}
                                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true" tree-view-link-icon--IsExpanded="true"}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                        {{> tree-view-link-toggle}}
                                        {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                                        {{#> tree-view-link-text}}
                                            Loading app 1
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                                        {{#> tree-view-link-text}}
                                            Loader app 2
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                                        {{#> tree-view-link-text}}
                                            Loader app 3
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                            {{/tree-view-list}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
            {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                {{#> tree-view-link-text}}
                    This is a really really really long folder name that overflows from the width of the container.
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
    {{/tree-view-list}}
{{/tree-view}}
```

```hbs title=With-badges
{{#> tree-view}}
    {{#> tree-view-list}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
                {{#> badge badge--modifier="pf-m-read"}}
                    2
                {{/badge}}
            {{/tree-view-link}}
            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 1
                        {{/tree-view-link-text}}
                            {{#> badge badge--modifier="pf-m-read"}}
                                2
                            {{/badge}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-current"}}
                                {{#> tree-view-link-text}}
                                    Current
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
                        {{#> badge badge--modifier="pf-m-read"}}
                            2
                        {{/badge}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                                {{#> badge badge--modifier="pf-m-read"}}
                                    2
                                {{/badge}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                                {{#> badge badge--modifier="pf-m-read"}}
                                    2
                                {{/badge}}
                            {{/tree-view-link}}
                            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                        {{> tree-view-link-toggle}}
                                        {{#> tree-view-link-text}}
                                            Loading app 1
                                        {{/tree-view-link-text}}
                                        {{#> badge badge--modifier="pf-m-read"}}
                                            2
                                        {{/badge}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> tree-view-link-text}}
                                            Loader app 2
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> tree-view-link-text}}
                                            Loader app 3
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                            {{/tree-view-list}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
            {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
                {{#> badge badge--modifier="pf-m-read"}}
                    2
                {{/badge}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
                {{#> badge badge--modifier="pf-m-read"}}
                    2
                {{/badge}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    This is a really really really long folder name that overflows from the width of the container.
                {{/tree-view-link-text}}
                {{#> badge badge--modifier="pf-m-read"}}
                    2
                {{/badge}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
    {{/tree-view-list}}
{{/tree-view}}
```

```hbs title=With-action-item
{{#> tree-view}}
    {{#> tree-view-list}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
                {{#> tree-view-link-action}}
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                {{/tree-view-link-action}}
            {{/tree-view-link}}
            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 1
                        {{/tree-view-link-text}}
                        {{#> tree-view-link-action}}
                            <i class="fas fa-clipboard" aria-hidden="true"></i>
                        {{/tree-view-link-action}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-current"}}
                                {{#> tree-view-link-text}}
                                    Current
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
                        {{#> tree-view-link-action}}
                            <i class="fas fa-bars" aria-hidden="true"></i>
                        {{/tree-view-link-action}}
                    {{/tree-view-link}}
                    {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                                        {{> tree-view-link-toggle}}
                                        {{#> tree-view-link-text}}
                                            Loading app 1
                                        {{/tree-view-link-text}}
                                        {{#> tree-view-link-action}}
                                            <i class="fas fa-star" aria-hidden="true"></i>
                                        {{/tree-view-link-action}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> tree-view-link-text}}
                                            Loader app 2
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
                                        {{#> tree-view-link-text}}
                                            Loader app 3
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                            {{/tree-view-list}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
            {{/tree-view-list}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item}}
            {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    This is a really really really long folder name that overflows from the width of the container.
                {{/tree-view-link-text}}
                {{#> tree-view-link-action}}
                    <i class="fas fa-bell" aria-hidden="true"></i>
                {{/tree-view-link-action}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
    {{/tree-view-list}}
{{/tree-view}}
```

## Documentation
### Overview

### Accessibility
| Attribute | Applied to | Outcome |

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |

