# Accessibility Guide

*Please note, this guide is a work in progress and will be updated regularly. We welcome your comments and feedback.*

The goal of software accessibility is to remove barriers and create inclusive product experiences that work for everyone, regardless of physical ability.

Since accessibility is best achieved when considered early in the design and development process, we ask everyone who contributes to or consumes PatternFly to understand accessibility needs and how they can be met. The following guide provides techniques and suggestions to help you design, develop, and test UIs to ensure that everyone has a good user experience.

- [Understanding Users’ Needs](#understanding-users-needs)
- [Level of Support](#level-of-support)
- [Checklists](#checklists)
  - [What PatternFly Should Address](#what-patternfly-should-address)
  - [What Products Should Address](#what-products-should-address)
- [Guidelines and References](#guidelines-and-references)
- [Techniques](#techniques)
- [Testing](#testing)

## Understanding Users’ Needs

Great user experiences don’t just happen; they’re designed, tested, and refined with the user in mind. To develop inclusive products, it’s important to understand the varying needs of a wide range of users and consider the assistive tools and methods they use. This section provides information to help you better understand and address the needs of these [different user groups](https://a11yproject.com/posts/myth-accessibility-m-blind-people/).

Note: It’s possible for a user to fall into more than one group, or to use tools and devices designed for a different user group. One of the greatest benefits of an inclusive design practice is that methods designed for a specific user group will often provide benefits to everyone.

### No Vision

Users with no vision rely on screen readers to access web sites and applications. Often, screen reader users will navigate a page by browsing specific elements, like headers, links, or form elements. Use semantic elements and check that labels are meaningful when pulled out of context.

### Low Vision

Users with low vision can have different needs depending on the nature of their visual impairment. Users may have difficulty with color differentiation, blurriness, or lack of vision in central or peripheral areas. These needs mean that interfaces should not rely on color to communicate information, palettes need to have sufficient contrast, and layouts should be responsive when font sizes are increased.

### Motor

Users with poor motor control can use a range of devices to access contents. Users who rely on a keyboard need elements that are keyboard accessible and highly visible when in focus. Users who rely on a mouse or touch need target areas that are large enough to be hit easily.

### Cognitive

Users who have difficulty processing information benefit from well-written content. Information should clear, concise, and easy to scan. Consider visual hierarchy, chunk content into short, related sections, and avoid long paragraphs.

## Level of Support

Our goal is to meet [level AA in the Web Content Accessibility Guidelines 2.1](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa). To help you get started, the following sections break some of these down by area of focus.

## Checklists

### What PatternFly Should Address

If you use PatternFly, or contribute to PatternFly as a designer or developer, these are the items that are expected to be covered in PatternFly:

| Guideline  | Link  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Semantic html structures are used to accurately communicate purpose and relationship of UI elements | [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) | `design` | `html` | `css` |  |
| Color is not the only method of communication. Providing meaning through color is supplementary to providing meaning with text | [WCAG 1.4.1](https://www.w3.org/WAI/WCAG21/quickref/#use-of-color) | `design` | `html` | `css` |  |
| Colors used provide sufficient contrast | [WCAG 1.4.3](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum) and [1.4.11](https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast) |  |  | `css` |  |
| Font sizes can scale up to 200% without loss of content or functionality, and up to 400% without needing to scroll in more than one direction.  | [WCAG&nbsp;1.4.4](https://www.w3.org/WAI/WCAG21/quickref/#resize-text) and [1.4.10](https://www.w3.org/WAI/WCAG21/quickref/#reflow) |  |  | `css` |  |
| Styles that affect text spacing (line height, space between paragraphs, letter spacing, and word spacing) can be increased without loss of content or functionality | [WCAG 1.4.12](https://www.w3.org/WAI/WCAG21/quickref/#text-spacing) |  |  | `css` |  |
| Contents that appear on hover and focus are dismissable, hoverable, and persistent | [WCAG 1.4.13](https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus) |  | `html` | `css` | `js` |
| All functionality is keyboard accessible | [WCAG 2.1.1](https://www.w3.org/WAI/WCAG21/quickref/#keyboard) and [2.1.2](https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap) |  | `html` |  |  |
| Order of elements in the HTML and in the layout follow a logical order | [WCAG 1.3.2](https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence) and [2.4.3](https://www.w3.org/WAI/WCAG21/quickref/#focus-order) | `design` | `html` | `css` |  |
| Elements with focus are clearly visible | [WCAG 2.4.7](https://www.w3.org/WAI/WCAG21/quickref/#focus-visible) |  |  | `css` |  |
| Flashing content | [WCAG 2.3.1](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=231#three-flashes-or-below-threshold) |  |  | `css` |  |
| Functionality that uses complex gestures can also be operated with a single pointer without a path based gesture | [WCAG 2.5.1](https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures) | `design` |  |  |  |
| Pointer events can be cancelled  | [WCAG 2.5.2](https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation) | | | | `js` |
| Visible labels of UI components are either the same as the accessible name or used in the beginning of the accessible name | [WCAG 2.5.3](https://www.w3.org/WAI/WCAG21/quickref/#label-in-name) |  | `html` |  |  |
| The target area for clickable elements is at least 44 by 44 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) | [WCAG 2.5.5 (AAA)](https://www.w3.org/WAI/WCAG21/quickref/#target-size) |  |  | `css` |  |
| An accessible name is provided for all elements | [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value) | `design` | `html` |  |  |
| Status messages can be programmatically determined through role or properties | [WCAG 4.1.3](https://www.w3.org/WAI/WCAG21/quickref/#status-messages) |  | `html` |  |  |

### What Products Should Address

If you consume PatternFly in your product, these are the items that are outside the scope of PatternFly, and should be addressed by the product developers and designers:


| Guideline  | Link  |  |  |
| --- | --- | --- | --- |
| Skip to Main links | [WCAG 2.4.1](https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks) |  | `development` |
| Page Titles | [WCAG 2.4.2](https://www.w3.org/WAI/WCAG21/quickref/#page-titled) |  | `development` |
| Links — If more than one link has the same label, it should also have the same url. Screen reader users can access the list of links that are on a page, which pulls the links out of context. If you have links with different URLs but the same label, then add additional text to provide context to the screen reader user. | [WCAG&nbsp;2.4.4](https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context) | `design`  | `development` |
| Landmarks — Use landmark roles to clearly identify regions that communicate page structure. If more than one landmark role occurs in the page, use aria-label to differentiate the landmark elements | [ARIA11](https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html) | `design`  | `development` |
| Headings — Heading text should be descriptive. Correct heading levels should be used to communicate the outline of the page. | [WCAG 2.4.10](https://www.w3.org/WAI/WCAG21/quickref/#section-headings) and [H42](https://www.w3.org/TR/WCAG20-TECHS/H42.html) | `design`  | `development` |
| Contents — Should be meaningful, clear, and concise |  | `design` |  |

## Guidelines and References

- [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/)
- [WebAIM's WCAG 2.0 Checklist](https://webaim.org/standards/wcag/checklist)
- [A11Y Project Checklist](https://a11yproject.com/checklist)

### PatternFly Guidelines
These are guidelines that we have defined for PatternFly.

#### Experience Parity
  - There should be parity between the screen reader contents and visibly rendered contents (refer to the [first Note for aria-hidden](https://www.w3.org/TR/wai-aria/#aria-hidden)).
  - There should be parity among all input types: touch, mouse, and keyboard.
      - Don’t optimize the experience for one input type at the expense of another.
      - Contents that a user can interact with using a mouse are also accessible using touch or keyboard.
      - Don’t show interactive elements on hover. Interactive elements that can display in a popup must display on click/touch/Enter events.
  - There should be parity between hover and focus events.
      - Any information that’s available on hover for the mouse user should be available on focus for the keyboard-only user, and also available to the screen reader user using `aria-describedby` (refer to [Tooltips & Toggletips example from Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)).

## Techniques

The [WCAG 2.0 techniques](https://www.w3.org/TR/WCAG20-TECHS/Overview.html#contents) provide examples on how to meet accessibility guidelines. Any techniques that are adopted as standard within PatternFly for handling specific patterns are included below.

### Labels and Accessible Names

- #### Form Fields
  - Use explicit linking between `label` and form input elements (e.g. `input`, `textarea`, or `select`) when both elements are present. Aside from providing an accessible name to screen readers, this method also increases the clickable area of the form element by making the label clickable, too. [H44](https://www.w3.org/TR/WCAG20-TECHS/H44.html)
  - When a `label` element cannot accompany a form input element:
      - Provide the name using `aria-label`. [ARIA14](https://www.w3.org/TR/WCAG20-TECHS/H65.html)
      - In a single-field form, the submit button label can serve as the field label for sighted users [G167](https://www.w3.org/TR/WCAG20-TECHS/general.html#G167)
      
- #### Landmark Roles
  - Screen reader users can navigate to sections of a page when [landmark roles](https://www.w3.org/TR/wai-aria-1.1/#landmark_roles) are used. Whenever a landmark role is used more than once, provide a name using `aria-label` or `aria-labelledby` to provide context for that landmark. [ARIA6](https://www.w3.org/TR/WCAG20-TECHS/ARIA6.html) [ARIA16](https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html)
  - While [`toolbar`](https://www.w3.org/TR/wai-aria-1.1/#toolbar) is not a landmark role, the same rule applies to this role.
- #### Icons
  Icons can either be decorative or semantic. Icons are **decorative** if you can remove an icon without affecting the information that is presented on the page. Icons are **semantic** when they provide information that otherwise isn't present, such as indicating status, indicating type of alert message, or replacing text as button labels. When an icon is semantic, the meaning must be provided in alternative ways to the user. The following guidelines should be followed when using icons within PatternFly components.
  - Add `aria-hidden="true"` for all icons, either to the icon element or a parent element of the icon. This renders the icon as something that assistive devices can ignore.
  - Additionally, for **semantic** icons:
      - Add a label for the icon in tooltip text that displays on hover, and also on focus for focusable elements.
      - For interactive elements like `<a>` and `<button>` where an icon is used as the label instead of text, provide the label on the interactive element using `aria-label`. For example:
      ```html
      <button class="..." aria-label="Close Dialog">
        <i class="..." aria-hidden="true"></i>
      </button>
      ```
      - For non-interactive icons, include `sr-only` text near the icon. Depending on the component, the `sr-only` text might not be a direct sibling to the icon element. For example, in the Alert component, the icon label text is adjacent to the message. This way, when `role="alert"` is added to `.pf-c-alert__body` for dynamically displayed alerts, the type of message is announced along with the message text.
      ```html
      <div class="pf-c-alert pf-m-success" aria-label="Success Notification">
        <div aria-hidden="true" class="pf-c-alert__icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="pf-c-alert__body">
          <h4 class="pf-c-alert__title">
            <span class="sr-only">Success: </span> Success notification title
          </h4>
        </div>
      </div>
      ```


## Testing
To keep testing simple and easy to complete, we ask that contributors complete the following tests to try to catch most of the accessibility issues that may be present:
- Test keyboard accessibility
- Use the [WAVE browser extension from WebAIM](https://wave.webaim.org/extension/) to disable styles, then test the information architecture and presence of adequate text labels.
- Test with any screen reader available in your operating system
- Check color contrast
