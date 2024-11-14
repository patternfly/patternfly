---
id: Content
section: components
cssPrefix: pf-v6-c-content
---

## Examples
### Basic
```hbs
{{> content--kitchen-sink}}
```

### Plain HTML in content wrapper
```hbs
{{#> content}}
  {{> content--kitchen-sink content--element--ExcludeClass=true}}
{{/content}}
```

### Long-form/editorial content
```hbs
{{> content--kitchen-sink content--element--IsEditorial=true}}
```

### Long-form/editorial content in content wrapper
```hbs
{{#> content content--IsEditorial=true}}
  {{> content--kitchen-sink content--element--ExcludeClass=true}}
{{/content}}
```

## Documentation
### Overview
When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use `pf-v6-c-content` as container. It can handle almost any HTML tag:

- `<p>` paragraphs
- `<ul>` `<ol>` `<dl>` lists
- `<h1>` to `<h6>` headings
- `<blockquote>` quotes
- `<em>` and `<strong>`

This `pf-v6-c-content` class can be used in any context where you just want to (or can only) write some text.

This component is an exception to the variable system since we style type selectors.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-content` | `<div>`, `<section>`, or `<article>` | Generates vertical rhythm and typographic treatment to html elements. |
| `.pf-m-visited` | `.pf-v6-c-content`, `<a>` | Modifies all links in a content block to include visited styles. Can also be applied to a single link in a content block. |
| `.pf-m-plain` | `<ul>`, `<ol>` | Removes the list marker and indentation. |
| `.pf-m-editorial` | `.pf-v6-c-content*` | Applies long-form, editorial content styles to a block of content or individual content elements. |
| `.pf-m-page-title` | `.pf-v6-c-content--[h1, h2, h3, h4, h5, h6]`, `.pf-v6-c-content [h1, h2, h3, h4, h5, h6]` | Applies page title styles. **Note:** `.pf-m-page-title` should only apply to the heading that serves as the title for the current page. |
