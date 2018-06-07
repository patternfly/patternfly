# PatternFly Next

## Install

- run `npm install @patternfly/patternfly-next`

When you install PatternFly Next, the package includes:

- a single file for the entire compiled library: `node_modules/@patternfly/patternfly-next/dist/patternfly.css`
- individual files with each component compiled separately: `node_modules/@patternfly/patternfly-next/dist/<ComponentName>/styles.css`
- a single file for the entire library's source (SASS): `node_modules/@patternfly/patternfly-next/dist/patternfly.scss`
- individual files for each component's source (SASS): `node_modules/@patternfly/patternfly-next/dist/<ComponentName>/styles.scss`

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

### Create a new component

- run `pf generate component <name>`

*To view visit http://localhost:8000/components/<name>*

### Create a new pattern

- run `pf generate pattern <name>`

*To view visit http://localhost:8000/patterns/<name>*

### Create a new demo

- run `pf generate demo <name>`

*To view visit http://localhost:8000/demos/<name>*

## FAQ

[How do I use SCSS variables to customize
the library?](https://pf-next.com/guidelines#variables)
