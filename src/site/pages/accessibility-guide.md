# Accessibility Guide

*Please note, this guide is a work in progress and will be updated regularly. We welcome your comments and feedback.*

The goal of software accessibility is to remove barriers and create inclusive product experiences that work for everyone, regardless of physical ability.

Since accessibility is best achieved when considered early in the design and development process, we ask everyone who contributes to or consumes PatternFly to understand accessibility needs and how they can be met. The following guide provides techniques and suggestions to help you design, develop, and test UIs to ensure that everyone has a good user experience.

- [Understanding Users’ Needs](#understanding-users-needs)
- [Checklists](#checklists)
  - [Design and Development Guidelines](#design-and-development-guidelines)
      - [What PatternFly Designers and Developers Should Address](#what-patternfly-designers-and-developers-should-address)
      - [What Product Developers and Designers Should Address](#what-product-developers-and-designers-should-address)
  - [Testing](#testing)
  - [Screen Reader Support](#screen-reader-support)
- [Methods](#methods)

## Understanding Users’ Needs

Great user experiences don’t just happen; they’re designed, tested, and refined with the user in mind. To develop inclusive products, it’s important to understand the varying needs of a wide range of users and consider the assistive tools and methods they use. This section provides information to help you better understand and address the needs of these [different user groups](https://a11yproject.com/posts/myth-accessibility-is-blind-people/).

Note: It’s possible for a user to fall into more than one group, or to use tools and devices designed for a different user group. One of the greatest benefits of an inclusive design practice is that methods designed for a specific user group will often provide benefits to everyone.

### No Vision

Users with no vision rely on screen readers to access web sites and applications. Often, screen reader users will navigate a page by browsing specific elements, like headers, links, or form elements. Use semantic elements and check that labels are meaningful when pulled out of context.

### Low Vision

Users with low vision can have different needs depending on the nature of their visual impairment. Users may have difficulty with color differentiation, blurriness, or lack of vision in central or peripheral areas. These needs mean that interfaces should not rely on color to communicate information, palettes need to have sufficient contrast, and layouts should be responsive when font sizes are increased.

### Motor

Users with poor motor control can use a range of devices to access contents. Users who rely on a keyboard need elements that are keyboard accessible and highly visible when in focus. Users who rely on a mouse or touch need target areas that are large enough to be hit easily.

### Cognitive

Users who have difficulty processing information benefit from well-written content. Information should clear, concise, and easy to scan. Consider visual hierarchy, chunk content into short, related sections, and avoid long paragraphs.

## Checklists
### Design and Development Guidelines
The following are guidelines that we strive to adopt:
- The [A11Y Project Checklist](https://a11yproject.com/checklist) is a helpful checklist to start with if you’re new to accessibility.
- Our goal is to meet [level AA in the Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl). While these guidelines can seem like a lot, the following sections capture some of these.

#### What PatternFly Designers and Developers Should Address

If you use PatternFly, or contribute to PatternFly as a designer or developer, these are the items that are expected to be covered in PatternFly:

- Experience parity
  - There should be parity between the screen reader contents and visibly rendered contents (refer to the [first Note for aria-hidden](https://www.w3.org/TR/wai-aria/#aria-hidden)).
  - There should be parity among all input types: touch, mouse, and keyboard. Don’t toggle states on hover. Don’t optimize the experience for one input type at the expense of another.
  - There should be parity between hover and focus events. Any information that’s available on hover should be available on focus, too.
- Semantic html structures are used to accurately communicate purpose and relationship of UI elements ([WCAG 1.3.1](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize&showtechniques=131#qr-content-structure-separation-programmatic)).  *[design, html, css]*
- Color is not the only method of communication. Providing meaning through color is supplementary to providing meaning with text ([WCAG 1.4.1](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-visual-audio-contrast-without-color)).  *[design, html, css]*
- Colors used provide sufficient contrast ([WCAG 1.4.3](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-visual-audio-contrast-contrast)).  *[css]*
- Font sizes can scale and the contents are functional and readable when the content sizes are doubled ([WCAG 1.4.4](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-visual-audio-contrast-scale)).  *[css]*
- All functionality is keyboard accessible ([WCAG 2.1.1 and 2.1.2](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#keyboard-operation)).  *[html]*
- Order of elements in the HTML and in the layout follow a logical order ([WCAG 1.3.2](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-content-structure-separation-sequence) and [WCAG 2.4.3](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-focus-order)). *[design, html, css]*
- Elements with focus are clearly visible ([WCAG 2.4.7](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-focus-visible)). *[css]*
- An accessible name is provided for all elements ([WCAG 4.1.2](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize&showtechniques=412#qr-ensure-compat-rsv)). *[design, html]*
- The target area for clickable elements is large enough and not overlapping ([Accessible Styles for Responsive Design, Google Web Fundamentals](https://developers.google.com/web/fundamentals/accessibility/accessible-styles#multi-device_responsive_design)). *[css]*

#### What Product Developers and Designers Should Address

- Skip to Main links ([WCAG 2.4.1](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-skip))
- Page Titles ([WCAG 2.4.2](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-title))
- Links ([WCAG 2.4.4](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-refs)) — If more than one link has the same label, it should also have the same url. Screen reader users can access the list of links that are on a page, which pulls the links out of context. If you have links with different URLs but the same label, then add additional text to provide context to the screen reader user.
- Landmarks ([ARIA11](https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html)) — Use landmark roles to communicate page structure. If more than one landmark role occurs in the page, use aria-label to differentiate the landmark elements
- Headings ([WCAG 2.4.10](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-headings) and [H42](https://www.w3.org/TR/WCAG20-TECHS/H42.html)) — Heading text should be descriptive. Correct heading levels should be used to communicate the outline of the page.
- Contents — Should be meaningful, clear, and concise


### Testing
To keep testing simple and easy to complete, we ask that contributors complete the following three types of tests to try to catch most of the accessibility issues that may be present:
- Test keyboard accessibility
- Disable styles to test the information architecture and presence of adequate text labels
- Test with any screen reader available in your operating system.

### Screen Reader Support
*Screen reader support is to be determined.*

## Methods

The [WCAG 2.0 techniques](https://www.w3.org/TR/WCAG20-TECHS/Overview.html#contents)   provide methods on how to meet accessibility guidelines. Additionally, as we discover techniques for specific interaction patterns, we'll document them here so that we can be consistent in our approach.
