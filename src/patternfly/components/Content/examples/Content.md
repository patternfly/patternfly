---
title: Content
section: components
cssPrefix: pf-c-content
---
import TemplateRaw from '!!raw-loader!./content-template-example.hbs';
import Template from './content-template-example.hbs';

<Example 
  title="Content example" 
  handlebars={TemplateRaw}>
  html={Template()} />

## Overview

When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use `pf-c-content` as container. It can handle almost any HTML tag:

- `<p>` paragraphs
- `<ul>` `<ol>` `<dl>` lists
- `<h1>` to `<h6>` headings
- `<blockquote>` quotes
- `<em>` and `<strong>`

This `pf-c-content` class can be used in any context where you just want to (or can only) write some text.

This component is an exception to the variable system since we style type selectors.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-content` | `<div>`, `<section>`, or `<article>` | Generates vertical rythm and typographic treatment to html elements |
