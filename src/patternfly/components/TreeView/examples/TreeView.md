---
title: Tree view
section: components
cssPrefix: pf-c-tree-view
---

## Examples
```hbs title=Default
{{#> tree-view}}
    {{#> tree-view-list tree-view-list--attribute='role="tree"'}}
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
            {{#> tree-view-link-wrapper}}
                {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                    {{> tree-view-link-toggle}}
                    {{#> tree-view-link-text}}
                        Application launcher
                    {{/tree-view-link-text}}
                {{/tree-view-link}}
                {{#> tree-view-action}}
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                {{/tree-view-action}}
            {{/tree-view-link-wrapper}}
            {{#> tree-view-list tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item}}
                    {{#> tree-view-link-wrapper}}
                        {{#> tree-view-link tree-view-link--modifier="pf-m-first pf-m-expandable pf-m-expanded"}}
                            {{> tree-view-link-toggle}}
                            {{#> tree-view-link-text}}
                                Application 1
                            {{/tree-view-link-text}}
                        {{/tree-view-link}}
                        {{#> tree-view-action}}
                            <i class="fas fa-clipboard" aria-hidden="true"></i>
                        {{/tree-view-action}}
                    {{/tree-view-link-wrapper}}
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
                    {{#> tree-view-link-wrapper}}
                        {{#> tree-view-link tree-view-link--modifier="pf-m-expandable pf-m-expanded"}}
                            {{> tree-view-link-toggle}}
                            {{#> tree-view-link-text}}
                                Application 2
                            {{/tree-view-link-text}}
                        {{/tree-view-link}}
                        {{#> tree-view-action}}
                            <i class="fas fa-bars" aria-hidden="true"></i>
                        {{/tree-view-action}}
                    {{/tree-view-link-wrapper}}
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
                                    {{#> tree-view-link-wrapper}}
                                        {{#> tree-view-link  tree-view-link--modifier="pf-m-expandable"}}
                                            {{> tree-view-link-toggle}}
                                            {{#> tree-view-link-text}}
                                                Loading app 1
                                            {{/tree-view-link-text}}
                                        {{/tree-view-link}}
                                        {{#> tree-view-action tree-view-link-action--modifier="pf-m-favorite"}}
                                            <i class="fas fa-star" aria-hidden="true"></i>
                                        {{/tree-view-action}}
                                    {{/tree-view-link-wrapper}}
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
            {{#> tree-view-link-wrapper}}
                {{#> tree-view-link tree-view-link--modifier="pf-m-expandable"}}
                    {{> tree-view-link-toggle}}
                    {{#> tree-view-link-text}}
                        This is a really really really long folder name that overflows from the width of the container.
                    {{/tree-view-link-text}}
                {{/tree-view-link}}
                {{#> tree-view-action}}
                    <i class="fas fa-bell" aria-hidden="true"></i>
                {{/tree-view-action}}
            {{/tree-view-link-wrapper}}
        {{/tree-view-list-item}}
    {{/tree-view-list}}
{{/tree-view}}
```

## Documentation
### Overview

### Accessibility
| Attribute | Applied to | Outcome |
| `role="grid"` | `.pf-c-tree-view__list` | Identifies the `<ul>` as a tree widget. **Place on the first <ul> only** |
| `role="group"` | `.pf-c-tree-view__list` | Identifies the `<ul>` element as a container of treeitem elements that form a branch of the tree. **Place on all ul's except the first ul** |

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-tree-view` | `<div>` | Initiates the tree view container. **Required** |
| `.pf-c-tree-view__list` | `<ul>` | Initiates a tree view list. **Required** |
| `.pf-c-tree-view__list-item` | `<li>` | Initiates a tree view list item. **Required** |
| `.pf-c-tree-view__link` | `<button>`, `<a>` | Initiates a tree view link. **Required** |
| `.pf-c-tree-view__toggle` | `<span>` | Initiates a tree view toggle. |
| `.pf-c-tree-view__text | `<span>` | Initiates tree view text. |
| `.pf-c-tree-view__icon | `<span>` | Initiates a tree view icon. |
| `.pf-c-tree-view__link-wrapper` | `<div>` | Initiates a tree view link wrapper. **Required when using .pf-c-tree-view__action** |
| `.pf-c-tree-view__action` | `<button>` | Initiates a tree view action. |
| `.pf-c-tree-view__search` | `<div>` | Initiates a tree view search wrapper. |
