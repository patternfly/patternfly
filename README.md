# PatternFly 4

## Install

- This assumes an environment is already set up for npm packages - if not, please use npm init following the steps at [https://docs.npmjs.com/getting-started/using-a-package.json](https://docs.npmjs.com/getting-started/using-a-package.json).
- run `npm install @patternfly/patternfly --save`

When you install PatternFly 4, the package includes:

- a single file for the entire compiled library: `node_modules/@patternfly/patternfly/patternfly.css`
- individual files with each component compiled separately: `node_modules/@patternfly/patternfly/<ComponentName>/styles.css`
- a single file for the entire library's source (SASS): `node_modules/@patternfly/patternfly/patternfly.scss`
- individual files for each component's source (SASS): `node_modules/@patternfly/patternfly/<ComponentName>/styles.scss`

Any of the files above are meant for use in consuming the library. The recommended
consumption approach will vary from project to project.

## Development

**PatternFly 4 Development requires Node v8.0.0 or greater**

To setup the PatternFly 4 development environment:

- clone the project
- run `npm install` from the project root
- run `npm run cli:setup` (only needed if doing development)
- run `npm run dev`
- open your browser to `http://localhost:8000`

After working on your contribution, check for [accessibility violations](#testing-for-accessibility).

## Set PatternFly 4 IP address

If Gatsby needs to run on local IP for testing on other machines or devices use `npm run dev:expose` which sets host to `0.0.0.0`.
If you want to set host to a specific IP address for example `172.17.12.1` run `npm run dev -H 172.17.12.1`.

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

## Guidelines for CSS development

- For issues created in Core that will affect a component in PF-React, a follow up issue must be created in PF-React once the Pull Request is merged. The issue should include the Core PR #, the Core Release, a link to the component in https://pf4.patternfly.org, and information detailing the change.
- If global variables are modified in Core, a React issue should be opened to address this.
- CSS developers should ensure that animation is well documented and communicated to the respective React developer.
- Once the component/enhancement is complete it should receive sign off from a visual designer who can then update the master sketch file with any changes.

## Experimental components

When creating a brand new component, it should be released as experimental in order to get feedback.  This results in the css not being bundled into the full distribution (`patternfly.css`), but the component level css is still included in the npm package for usage.

To make a component experimental - modify the `experimental-features.js` file in the root and add an entry that looks like the following:

```javascript
{
  name: 'Alert',
  path: 'components/Alert/'
},
```

## Testing for accessibility

PatternFly uses [aXe: The Accessibility Engine](https://www.deque.com/axe/) to check for accessibility violations. Our goal is to meet WCAG 2.0 AA requirements, as noted in our [Accessibility guide](https://pf4.patternfly.org/accessibility-guide).

### How to perform an accessibility audit with aXe
aXe is available as either a browser extension or npm script.

To run the a11y audit locally:
- install the latest [chromedriver](http://chromedriver.chromium.org/downloads) and ensure its available on your system `$PATH`
  - macOS users can simply `brew cask install chromedriver`
- run `npm run dev`
- run `npm run a11y` (in another console)

The tool is configured to return WCAG 2.0 AA violations for the full page renderings of all components, layouts, utilities, and demos. The tool will provide feedback about what the violation is and a link to documentation about how to address the violation.

The same tool is also available as a browser extension for [Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/).

### Fixing violations

Ignore the violations that aren’t related to your contribution.

Fix violations related to your contribution.

If there are violations that are not obvious how to fix, then [create an issue](https://github.com/patternfly/patternfly-next/issues/new) with information about the violation that was found. For example, some violations might require further discussion before they can be addressed. And some violations may not be valid and require changes to the workspace or tooling to stop flagging the violation.

If you have any suggestions about ways that we can improve how we use this tool, please let us know by opening an issue.

## FAQ

#### CSS Variables
[How do I use CSS variables to customize
the library?](https://pf4.patternfly.org/guidelines#variables)

#### Browser support
PatternFly 4 is supported on the latest version of the following browsers:
- Chrome
- Firefox
- Safari
- Edge

We also provide documentation for how to enable IE11 support in our [wiki](https://github.com/patternfly/patternfly-next/wiki/IE11-Support). 
