---
title: Tree view
section: components
cssPrefix: pf-c-tree-view
beta: true
---

## Examples
```hbs title=Default
{{#> tree-view}}
	{{#> tree-view-list tree-view-list--attribute='role="tree"'}}
		{{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
			{{#> tree-view-link tree-view-link--IsFirst="true"}}
				{{> tree-view-link-toggle}}
				{{#> tree-view-link-text}}
					Application launcher
				{{/tree-view-link-text}}
      {{/tree-view-link}}
			{{#> tree-view-list newcontext tree-view-list--IsChild="true" tree-view-list--modifier="pf-m-nested-level-1"}}
				{{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
					{{#> tree-view-link tree-view-link--modifier="pf-m-first"}}
						{{> tree-view-link-toggle}}
						{{#> tree-view-link-text}}
							Application 1
						{{/tree-view-link-text}}
					{{/tree-view-link}}
					{{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
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
				{{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
					{{#> tree-view-link}}
						{{> tree-view-link-toggle}}
						{{#> tree-view-link-text}}
							Application 2
						{{/tree-view-link-text}}
					{{/tree-view-link}}
					{{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
						{{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
							{{#> tree-view-link}}
								{{> tree-view-link-toggle}}
								{{#> tree-view-link-text}}
									Settings
								{{/tree-view-link-text}}
							{{/tree-view-link}}
						{{/tree-view-list-item}}
						{{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
							{{#> tree-view-link}}
								{{> tree-view-link-toggle}}
								{{#> tree-view-link-text}}
									Loader
								{{/tree-view-link-text}}
							{{/tree-view-link}}
							{{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-3"}}
								{{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
									{{#> tree-view-link}}
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
			{{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
				{{#> tree-view-link}}
					{{> tree-view-link-toggle}}
					{{#> tree-view-link-text}}
						Cost management
					{{/tree-view-link-text}}
				{{/tree-view-link}}
			{{/tree-view-list-item}}
			{{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
				{{#> tree-view-link}}
					{{> tree-view-link-toggle}}
					{{#> tree-view-link-text}}
						Sources
					{{/tree-view-link-text}}
				{{/tree-view-link}}
			{{/tree-view-list-item}}
		{{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
			{{#> tree-view-link}}
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
    {{#> tree-view-list tree-view-list--attribute='role="tree"'}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
            {{#> tree-view-link tree-view-link--IsFirst="true"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
            {{/tree-view-link}}
            {{#> tree-view-list newcontext tree-view-list--IsChild="true" tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first"}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 1
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
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
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                            {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                                    {{#> tree-view-link}}
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
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
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
    {{#> tree-view-list tree-view-list--attribute='role="tree"'}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
            {{#> tree-view-link tree-view-link--IsFirst="true"}}
                {{> tree-view-link-toggle}}
								<input type="checkbox"/>
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
            {{/tree-view-link}}
            {{#> tree-view-list newcontext tree-view-list--IsChild="true" tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first"}}
                        {{> tree-view-link-toggle}}
												<input type="checkbox"/>
                        {{#> tree-view-link-text}}
                            Application 1
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link}}
																<input type="checkbox"/>
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item}}
                            {{#> tree-view-link tree-view-link--modifier="pf-m-current"}}
																<input type="checkbox"/>
                                {{#> tree-view-link-text}}
                                    Current
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                    {{/tree-view-list}}
                {{/tree-view-list-item}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link}}
                        {{> tree-view-link-toggle}}
												<input type="checkbox"/>
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
																<input type="checkbox"/>
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
																<input type="checkbox"/>
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                            {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                                    {{#> tree-view-link}}
                                        {{> tree-view-link-toggle}}
																				<input type="checkbox"/>
                                        {{#> tree-view-link-text}}
                                            Loading app 1
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
 																				<input type="checkbox"/>
                                        {{#> tree-view-link-text}}
                                            Loader app 2
                                        {{/tree-view-link-text}}
                                    {{/tree-view-link}}
                                {{/tree-view-list-item}}
                                {{#> tree-view-list-item}}
                                    {{#> tree-view-link}}
     																		<input type="checkbox"/>
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
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
								<input type="checkbox"/>
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
								<input type="checkbox"/>
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
								<input type="checkbox"/>
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
    {{#> tree-view-list tree-view-list--attribute='role="tree"'}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
            {{#> tree-view-link tree-view-link--IsFirst="true"}}
                {{> tree-view-link-toggle}}
                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true" tree-view-link-icon--IsExpanded="true"}}
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
            {{/tree-view-link}}
            {{#> tree-view-list newcontext tree-view-list--IsChild="true" tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first"}}
                        {{> tree-view-link-toggle}}
                        {{> tree-view-link-icon tree-view-link-icon--IsFolder="true" tree-view-link-icon--IsExpanded="true"}}
                        {{#> tree-view-link-text}}
                            Application 1
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
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
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link}}
                        {{> tree-view-link-toggle}}
                        {{> tree-view-link-icon tree-view-link-icon--IsFolder="true" tree-view-link-icon--IsExpanded="true"}}
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
                    {{/tree-view-link}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
                                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
                                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true" tree-view-link-icon--IsExpanded="true"}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                            {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                                    {{#> tree-view-link}}
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
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
                {{> tree-view-link-icon tree-view-link-icon--IsFolder="true"}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
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
    {{#> tree-view-list tree-view-list--attribute='role="tree"'}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
            {{#> tree-view-link tree-view-link--IsFirst="true"}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Application launcher
                {{/tree-view-link-text}}
								{{#> tree-view-link-count}}
									{{#> badge badge--modifier="pf-m-read"}}
										2
									{{/badge}}
								{{/tree-view-link-count}}
            {{/tree-view-link}}
            {{#> tree-view-list newcontext tree-view-list--IsChild="true" tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link tree-view-link--modifier="pf-m-first"}}
											{{> tree-view-link-toggle}}
											{{#> tree-view-link-text}}
												Application 1
											{{/tree-view-link-text}}
											{{#> tree-view-link-count}}
												{{#> badge badge--modifier="pf-m-read"}}
													2
												{{/badge}}
											{{/tree-view-link-count}}
                    {{/tree-view-link}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
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
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link}}
                        {{> tree-view-link-toggle}}
                        {{#> tree-view-link-text}}
                            Application 2
                        {{/tree-view-link-text}}
												{{#> tree-view-link-count}}
													{{#> badge badge--modifier="pf-m-read"}}
														2
													{{/badge}}
												{{/tree-view-link-count}}
                    {{/tree-view-link}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
														{{#> tree-view-link-count}}
															{{#> badge badge--modifier="pf-m-read"}}
																2
															{{/badge}}
														{{/tree-view-link-count}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
															{{#> tree-view-link-count}}
																{{#> badge badge--modifier="pf-m-read"}}
																	2
																{{/badge}}
															{{/tree-view-link-count}}
                            {{/tree-view-link}}
                            {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                                    {{#> tree-view-link}}
                                        {{> tree-view-link-toggle}}
                                        {{#> tree-view-link-text}}
                                            Loading app 1
                                        {{/tree-view-link-text}}
																			{{#> tree-view-link-count}}
																				{{#> badge badge--modifier="pf-m-read"}}
																					2
																				{{/badge}}
																			{{/tree-view-link-count}}
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
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
								{{#> tree-view-link-count}}
									{{#> badge badge--modifier="pf-m-read"}}
										2
									{{/badge}}
								{{/tree-view-link-count}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
								{{#> tree-view-link-count}}
									{{#> badge badge--modifier="pf-m-read"}}
										2
									{{/badge}}
								{{/tree-view-link-count}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
							{{> tree-view-link-toggle}}
							{{#> tree-view-link-text}}
									This is a really really really long folder name that overflows from the width of the container.
							{{/tree-view-link-text}}
							{{#> tree-view-link-count}}
								{{#> badge badge--modifier="pf-m-read"}}
									2
								{{/badge}}
							{{/tree-view-link-count}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
    {{/tree-view-list}}
{{/tree-view}}
```

```hbs title=With-action-item
{{#> tree-view}}
    {{#> tree-view-list tree-view-list--attribute='role="tree"'}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
            {{#> tree-view-link-wrapper}}
                {{#> tree-view-link tree-view-link--IsFirst="true"}}
                    {{> tree-view-link-toggle}}
                    {{#> tree-view-link-text}}
                        Application launcher
                    {{/tree-view-link-text}}
                {{/tree-view-link}}
                {{#> tree-view-action tree-view-action--attribute='aria-label="Actions"'}}
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                {{/tree-view-action}}
            {{/tree-view-link-wrapper}}
            {{#> tree-view-list newcontext tree-view-list--IsChild="true" tree-view-list--modifier="pf-m-nested-level-1"}}
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link-wrapper}}
                        {{#> tree-view-link tree-view-link--modifier="pf-m-first"}}
                            {{> tree-view-link-toggle}}
                            {{#> tree-view-link-text}}
                                Application 1
                            {{/tree-view-link-text}}
                        {{/tree-view-link}}
                        {{#> tree-view-action tree-view-action--attribute='aria-label="Copy"'}}
                            <i class="fas fa-clipboard" aria-hidden="true"></i>
                        {{/tree-view-action}}
                    {{/tree-view-link-wrapper}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
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
                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                    {{#> tree-view-link-wrapper}}
                        {{#> tree-view-link}}
                            {{> tree-view-link-toggle}}
                            {{#> tree-view-link-text}}
                                Application 2
                            {{/tree-view-link-text}}
                        {{/tree-view-link}}
                        {{#> tree-view-action tree-view-action--attribute='aria-label="Action"'}}
                            <i class="fas fa-bars" aria-hidden="true"></i>
                        {{/tree-view-action}}
                    {{/tree-view-link-wrapper}}
                    {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-2"}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Settings
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                        {{/tree-view-list-item}}
                        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true" tree-view-list-item--IsExpanded="true"}}
                            {{#> tree-view-link}}
                                {{> tree-view-link-toggle}}
                                {{#> tree-view-link-text}}
                                    Loader
                                {{/tree-view-link-text}}
                            {{/tree-view-link}}
                            {{#> tree-view-list newcontext tree-view-list--modifier="pf-m-nested-level-3"}}
                                {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
                                    {{#> tree-view-link-wrapper}}
                                        {{#> tree-view-link}}
                                            {{> tree-view-link-toggle}}
                                            {{#> tree-view-link-text}}
                                                Loading app 1
                                            {{/tree-view-link-text}}
                                        {{/tree-view-link}}
                                        {{#> tree-view-action tree-view-action--attribute='aria-label="Favorite"' tree-view-link-action--modifier="pf-m-favorite"}}
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
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Cost management
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link}}
                {{> tree-view-link-toggle}}
                {{#> tree-view-link-text}}
                    Sources
                {{/tree-view-link-text}}
            {{/tree-view-link}}
        {{/tree-view-list-item}}
        {{#> tree-view-list-item tree-view-list-item--IsExpandable="true"}}
            {{#> tree-view-link-wrapper}}
                {{#> tree-view-link}}
                    {{> tree-view-link-toggle}}
                    {{#> tree-view-link-text}}
                        This is a really really really long folder name that overflows from the width of the container.
                    {{/tree-view-link-text}}
                {{/tree-view-link}}
                {{#> tree-view-action tree-view-action--attribute='aria-label="Alert"'}}
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
| -- | -- | -- |
| `role="tree"` | `.pf-c-tree-view__list` | Identifies the `ul` as a tree widget. **Place on the outermost `ul` only** |
| `role="group"` | `.pf-c-tree-view__list` | Identifies the `ul` element as a container of treeitem elements that form a branch of the tree. **Place on all `ul`s except the first `ul`** |
| `role="treeitem"`| `.pf-c-tree-view__link` | Identifies the link as a tree item. **Note:** The role is set on the element that is interactive and focusable. |
| `role="none"` | `.pf-c-tree-view__list-item` | Hides the implicit listitem role of the li element from assistive technologies. |
| `aria-expanded="false"` | `.pf-c-tree-view__list-item.pf-m-expandable` | Indicates the parent node is closed, i.e., the descendant elements are not visible. |
| `aria-expanded="true"` | `.pf-c-tree-view__list-item.pf-m-expandable.pf-m-expanded` | Indicates the parent node is open, i.e., the descendant elements are visible. |
| `tabindex="-1"` | `.pf-c-tree-view__link` | Makes the element with the treeitem role focusable without including it in the tab sequence of the page. |
| `tabindex="0"` | `.pf-c-tree-view__link` | Includes the element with the treeitem role in the tab sequence. Only one treeitem in the tree has tabindex="0". When the user moves focus in the tree, the element included in the tab sequence changes to the element with focus. |
| `aria-label="[button label text]"` | `.pf-c-tree-view__action` | Provides an accessible name for the button when an icon is used instead of text. **Required when icon is used with no supporting text** |

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-tree-view` | `<div>` | Initiates the tree view container. **Required** |
| `.pf-c-tree-view__list` | `<ul>` | Initiates a tree view list. **Required** |
| `.pf-c-tree-view__list-item` | `<li>` | Initiates a tree view list item. **Required** |
| `.pf-c-tree-view__link` | `<button>`, `<a>` | Initiates a tree view link. **Required** |
| `.pf-c-tree-view__link-count` | `<span>` | Initiates a tree view link count. |
| `.pf-c-tree-view__toggle-icon` | `<span>` | Initiates a tree view toggle icon. |
| `.pf-c-tree-view__text` | `<span>` | Initiates tree view text. |
| `.pf-c-tree-view__icon` | `<span>` | Initiates a tree view icon. |
| `.pf-c-tree-view__link-wrapper` | `<div>` | Initiates a tree view link wrapper. **Required when using .pf-c-tree-view__action** |
| `.pf-c-tree-view__action` | `<button>` | Initiates a tree view action. |
| `.pf-c-tree-view__search` | `<div>` | Initiates a tree view search wrapper. |
| `.pf-m-first` | `.pf-c-tree-view__link` | Modifies the tree view link to be the first link item. |
| `.pf-m-nested-level-1` | `.pf-c-tree-view__list` | Modifies the tree view list to be the first nested level. |
| `.pf-m-nested-level-2` | `.pf-c-tree-view__list` | Modifies the tree view list to be the second nested level. |
| `.pf-m-nested-level-3` | `.pf-c-tree-view__list` | Modifies the tree view list to be the third nested level. |
| `.pf-m-current` | `.pf-c-tree-view__link` | Modifies the tree view link to be current. |
