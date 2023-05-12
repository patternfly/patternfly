---
id: workspace-docs
title: Workspace docs
---

## What is handlebars?

<a href="https://handlebarsjs.com/api-reference/data-variables.html" target="_blank">Handlebars</a>&nbsp;is a minimal, simple templating language.

It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like HTML with embedded Handlebars expressions.

### Why do we use it?

We use handlebar.js in order to deliver framework agnostic, pure html/js.

### How does it work?

Based on JS, HTML, CSS. Partials contain structure, templates render partials, objects can provide data.

## Functions

Handlebars provide a few built in functions. Otherwise, we have to write our own. The <a href="https://github.com/patternfly/patternfly/blob/main/scripts/helpers.mjs" target="_blank">`helpers.mjs`</a> contains our helper functions. They can be written as arrow functions (manipulate data) or regular functions.

```

export const setVar = function(varName, varValue, options) => {
  if (!options.data) {
    options.data = {};
  }

  options.data[varName] = varValue;
};

```


```

export const getVar = (varValue, that, options) => {
  const mappedVariableName = options.data[varValue];

  return that[mappedVariableName];
};

```

When you define variable, you can call it by the following

```
{{setVar 'component-root' (kebabCase this.className)}}
{{setVar 'component-modifier' (concat @component-root '--modifier')}}
```

Note: Function calls should not contain commas if accepts parameters.

Functions can be called as:
* `{{myFunction 'string1' data1}}` call the function
* `{{data (myFunction 'string1' data1)}}` renders data and run function inside of data or partial call
* `{{> partial (myFunction 'string1' data1)}}` when data is rendered without content `{{@partial-block}}`
* `{{#> partial (myFunction 'string1' data1)}}{{/partial}}` when partial render `{{@partial-block}}`
* `<div>{{#> if(myFunction 'string1' data1) else }}{{/partial}}` when partial render `{{@partial-block}}`

Note: strings need single quotes, booleans, data, variables, etc do not need quotes

<a href="https://handlebarsjs.com/api-reference/data-variables.html#first" target="_blank">Built in @data variables</a>

* @root - Initial context with which the template was executed.
* @first - Set to true by the each helper for the first step of iteration.
* @index - Zero-based index for the current iteration step. Set by the each helper.
* @key - Key name for the current iteration step. Set by the each helper when iterating over objects.
* @last - Set to true by the each helper for the last step of iteration.
* @level - For debugging...

| Built in helper functions | Description | Usage
| ----------- | ----------- | -----------
| **unless** | Conditional, render content unless condition is true. | `{{#unless isTrue}}{{/unless}}`
| **if** | Conditional, render content if condition is true. | `{{#if isTrue}}{{/if}}`
| **else** | Conditional, render content if `if` condition is unmet. | `{{each foo bar}}`
| **each** | Iterates over an array or object. | `{{#each dataObject}}loop content{{/each}}`
| **with** | Allows you to change the evaluation context of template-part.. | `{{#with dataObject}}loop content{{/each}}`

| Custom helpers | Description | Usage |
| ----------- | ----------- | ----------- | ----------- |
| **concat** | Concat joins two or more strings. It can be used with text and/or contextual data. | `{{concat foo bar}}`
| **ifEquals** | Bool conditional, render if resolves to true. | `{{concat foo bar}}`
| **ifAny** | Bool conditional, render if any value resolves to true. | `{{concat foo bar}}`
| **ternary** | Standard turnery. | `{{(ternary card--class-update card--class-update (pfv))}}`
| **invers** | Helper which allows a booleans value to be inversed, similar to how notting a variable with ! works in regular JS. | `__tabs-item--current=(inverse __tabs-list--IsOverflowSelected)`

| Suggested custom helper functions | Description | Usage
| ----------- | ----------- | ----------- | ----------- |
| **setVar** | Sets a variable to @data context. | `{{getVar 'component-modifier' this}}`, , `{{#if (setVar 'component-attribute' this)}}`
| **getVar** | Gets a variable from @data context. | `{{getVar 'component-attribute' this}}`, `{{#if (getVar 'component-attribute' this)}}`
| **setRoot** | Sets a variable to @root context. | `{{setRoot 'component-modifier' this}}`, `{{#if (setRoot 'component-modifier' this)}}`
| **getRoot** | Gets a variable from @root context. | `{{getRoot 'component-modifier' this}}`, `{{#if (getRoot 'component-modifier' this)}}`
| **loadParams** | Load default parameters to context and map to individual component. | `{{getVar 'component-modifier' this}}`
| **constructPrefix** | Constructs pf prefix. | `{{constructPrefix}}`
| **debug** | Logs component parameters | `{{debug}}`, `{{debug options}}`, `{{> example-component-object example-component-body--modifier='testing' (debug)}}`

### Current issues
* Code gets very repetitive when developing demos
* Hard to track accessibility with current tooling
* Consider https://github.com/patternfly/patternfly/blob/main/src/patternfly/demos/Table/table-compact-table.hbs. If a row needs to be added in the middle of the table, all indexes have to be manually updated.
  * The aria values are updated manually
  * Indexes are updated manually

## New features
* `{{#> config}}{{/config}}` Sets default options for all components
  * Can automate parameter rendering if called either a component or loop
  * Fully extensible
  * Works with current functionality
* `{{#> set-class}}{{/set-class}}` Automates `{{#if component--modifier}}render modifier{{/if}}`. Allows for extensible params to be added.
  * Can automate class rendering if called either a component or loop
  * Fully extensible
  * Works with current functionality
* `{{#> set-attribute}}{{/set-attribute}}` Sets default attributers for all components. Allows for extensible params to be added.
  * Can automate parameter rendering if called either a component or loop
  * Fully extensible
  * Works with current functionality

### Demo

### Data objects
* `options`, `{{log options}}`, `{{debug options}}` Initial context with which the template was executed.
* `context`, `{{log context}}`, `{{debug context}}` Current context where template is being executed.
* `data`, `{{log data}}`, `{{debug data}}` - Contains @index, @key, @first, @last
* `root`, `{{log root}}`, `{{debug root}}` -
* `hash` Not quite sure


### Whitespace control
https://handlebarsjs.com/guide/expressions.html#whitespace-control
* Omit whitespace by placing `~` in by braces

### Useful links
* <a href="https://blog.teamtreehouse.com/?s=handlebars" target="_blank">Treehouse blog</a>
*

### To do

[] Get arrays to work / standardize defining data objects
[] Loop through attributes, render if property has value
[] Update generate to add .scss to component-namespaces.scss/layout
[] Watch `.hbs` files in subdirectories
[] Grab item in page and change it’s settings
[] Figure out with helper - https://handlebarsjs.com/guide/block-helpers.html#the-with-helper
