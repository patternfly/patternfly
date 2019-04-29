## Overview

Skip to content allows screen reader and keyboard users to bypass navigation rather than tabbing through it.

When using `.pf-c-skip-to-content` you must also provide an anchor with the matching id that is applied to the `href` attribute of `.pf-c-skip-to-content`. You will typically place this just before the main content of the page. Ex: `<a id="main-content"></a>` For a demo of this see the [Page demo](../../../demos/Page/examples).

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-skip-to-content` | `<a>` |  initiates the skip to content link. |
| `.pf-m-focus` | `.pf-c-skip-to-content` |  Forces display of the focus state. This state is primarily for demonstration purposes and would not normally be used in lieu of the `:focus` pseudo-class. |
