## Overview

`Tabs` should only be used to change content views within a page. The similar-looking but semantically different  `Nav` component is available for navigation use cases.

## Directional scroll buttons

This component includes left and right directional buttons that should be enabled whenever scrolling is necessary to see every tab. These buttons are hidden by default, but can be made visible using the `pf-m-tabs-scrollLeftVisible` and `pf-m-tabs-scrollRightVisible` modifiers. The `hidden` attribute should also be removed from the corresponding `.pf-c-tabs__scroll-button` whenever a button is made visible.