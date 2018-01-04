# PatternFly Next

## Setup

- clone the project
- run `npm install` from the project root
- run `npm link` from the project root
- run `npm run dev`
- open your browser to `http://localhost:4200`

## Terminology

**component**
  : Components are the smallest abstraction in our system. They are completely unaware of the context in which they are used. As a result, they can not have differing design based on how they are used. By themselves they are blocks that will stack on top of each other. The HTML elements that make up an element follow the BEM naming convention for classes, so all children have the sluggified version of the component name prefixed. They are part of the core PatternFly library.

**layout**
  : Layouts are technically a type of component, but they are solely meant for use in positioning and sizing other components and patterns. They have no colors, borders, text, or any other visible parts to them. A layout can only have an effect on it's immediate children. They are part of the core PatternFly library.

**pattern**
  : Patterns are the result of assembling components and layouts. While similiar to extensions, they differ in that they are reusable across contexts. They are part of the core PatternFly library.

**extension**
  : Extensions are the result of assembling components, layouts, and patterns. While similiar to extensions, they differ in that they are NOT reusable across contexts. They are typically unique to RedHat products. Due to the lack of reuse outside of RedHat
  products, they are not included in the core PatternFly library, and are instead offered as an addon.

**module**
  : Modules are a generic term that refer to either a component, layout, pattern, or extension.

**modifier**
  : Modifiers are something that apply small variations or differing states to a module. The modifier is applied by a class that follows the convention `is-<state>` or `has-<state>`. Modifiers are only relevant in the module in which they are used.

## CLI Commands

`pf overview`              Lists the different resource types in the design system

`pf add:component <name>`  Adds a new component to the design system

`pf add:layout <name>`     Adds a new layout to the design system

`pf add:pattern <name>`    Adds a new pattern to the design system

`pf add:extension <name>`  Adds a new extension to the design system

## Workspace

When you navigate to `http://localhost:4200` the browser will load what is referred to as the workspace. The workspace
is meant for use in active development. It automatically loads and reloads
all available components, layouts, and patterns as changes are made.

#### Developing Modules

##### Templates
The markup for modules are contained in the associated html file of the module, and all contents should be wrapped in a template tag.

To show multiple states of a module, you can wrap each state in a individual `template` tag, and apply the various modifiers needed to reproduce that state of the module.

The template tag also incorporates `data-title` and `data-description` attributes. If the attributes are specified the values will be used to communicate (in the workspace) about the template state that is associated with each template. Usage of these attributes are preferred over direct insertion of this information, because the contents of a template tag will also be used for the examples in the documentation. By making use of these attributes, we eliminate unneeded code in our documentation examples.

##### Styles
@TODO: Write docs for variables and styling conventions


## Documentation

If you navigate to `http://localhost:4200/docs` you will see documentation for all of the scss that has sassdoc compliant documentation. In addition
to the default [sassdoc annotations](http://sassdoc.com/annotations/), we also provide `@moduleType`, `@modifier`, and `@template`. When you use the `pf` CLI commands, a starter for these
docs is generated.

`@moduleType` - The type of item being created (component, layout, pattern).

`@modifier` - A class that is applied to the
item to modify the default state.

`@template` - The path to the template associated with
the item. The path is relative to the project root.

As a quick example of how we use sassdoc, see below:

```
/// A description of the component/layout/pattern
/// @group layouts
/// @moduleType layout
/// @author Jane Doe <jdoe@example.com>
/// @modifier .is-something A description of how the modifier changes the default behavior.
/// @template src/path/to/template/file.html
```

You can read more about [sassdoc](http://sassdoc.com/getting-started/) on their website.
