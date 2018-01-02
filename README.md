# PatternFly Next

## Development

### Setup

- clone the project
- run `npm install` from the project root
- run `npm link` from the project root
- run `npm run dev`
- open your browser to `http://localhost:4200`

### CLI Commands

`pf overview`              Lists the different resource types in the design system

`pf add:element <name>`    Adds a new element to the design system

`pf add:component <name>`  Adds a new component to the design system

`pf add:layout <name>`     Adds a new layout to the design system

`pf add:example <name>`    Adds a new example to the design system

`pf add:extension <name>`  Adds a new extension to the design system

### Showing Multiple States for Components

To show multiple states of a component. You can wrap each state in a `template`
tag.

The template tag also incorporates `data-title` and `data-description`
attributes. If the attributes are specified the values will be used to
communicate about the template state that is associated with each template.

\* Usage of these attributes are preferred over direction insertion of this information, because the contents of a template tag will also be used for the example in the documentation. By using these attributes,
we eliminate unneeded code in our documentation examples.
