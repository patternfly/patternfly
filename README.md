# PatternFly Next

## Install 

- This assumes an environment is already set up for npm packages - if not, please use npm init following the steps at [https://docs.npmjs.com/getting-started/using-a-package.json](https://docs.npmjs.com/getting-started/using-a-package.json).
- run `npm install @patternfly/patternfly-next --save`

When you install PatternFly Next, the package includes:

- a single file for the entire compiled library: `node_modules/@patternfly/patternfly-next/patternfly.css`
- individual files with each component compiled separately: `node_modules/@patternfly/patternfly-next/<ComponentName>/styles.css`
- a single file for the entire library's source (SASS): `node_modules/@patternfly/patternfly-next/patternfly.scss`
- individual files for each component's source (SASS): `node_modules/@patternfly/patternfly-next/<ComponentName>/styles.scss`

Any of the files above are meant for use in consuming the library. The recommended
consumption approach will vary from project to project.

## Development

**PatternFly Next Development requires Node v8.0.0 or greater**

To setup the PatternFly Next development environment:

- clone the project
- run `npm install` from the project root
- run `npm run cli:setup` (only needed if doing development)
- run `npm run dev`
- open your browser to `http://localhost:8000`

After working on your contribution, check for [accessibility violations](#testing-for-accessibility).

### Create a new component

- run `pf generate component <name>`

*To view visit http://localhost:8000/components/<name>*

### Create a new layout

- run `pf generate layout <name>`

*To view visit http://localhost:8000/layout/<name>*

### Create a new utility

- run `pf generate utility <name>`

*To view visit http://localhost:8000/utilities/<name>*

### Create a new demo

- run `pf generate demo <name>`

*To view visit http://localhost:8000/demos/<name>*

## Testing for Accessibility

PatternFly uses [aXe: The Accessibility Engine](https://www.deque.com/axe/) to check for accessibility violations. Our goal is to meet WCAG 2.0 AA requirements, as noted in our [Accessibility Guide](https://pf-next.com/accessibility-guide).

### How to Perform an Accessibility Audit with aXe
aXe is available as either a browser extension or npm script.

To run the a11y audit locally:
- install the latest [chromedriver](http://chromedriver.chromium.org/downloads) and ensure its available on your system `$PATH`
  - alternatively, macOS users can simply `brew cask install chromedriver`
- run `npm run dev`
- run `npm run a11y` (in another console)

The tool is configured to return WCAG 2.0 AA violations for the full page renderings of all components, layouts, utilities, and demos. The tool will provide feedback about what the violation is and a link to documentation about how to address the violation.

The same tool is also available as a browser extension for [Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/). 

### Fixing Violations

Ignore the violations that aren’t related to your contribution.

Fix violations related to your contribution.

If there are violations that are not obvious how to fix, then [create an issue](https://github.com/patternfly/patternfly-next/issues/new) with information about the violation that was found. For example, some violations might require further discussion before they can be addressed. And some violations may not be valid and require changes to the workspace or tooling to stop flagging the violation.

If you have any suggestions about ways that we can improve how we use this tool, please let us know by opening an issue.

## FAQ

[How do I use SCSS variables to customize
the library?](https://pf-next.com/guidelines#variables)
