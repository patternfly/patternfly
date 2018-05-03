# Accessibility Guide

*Please note, this guide is a work in progress and will be updated regularly. We welcome your comments and feedback.*

The goal of software accessibility is to remove barriers to the use of technology so that it can be inclusive of everyone, regardless of physical ability. Accessibility addresses permanent to temporary disabilities and includes a range of visual impairments, as well as physical, sensory or learning challenges, including those that occur normally as adults age. Designing Red Hat software with this broad range of accessibility in mind will empower any user to accomplish their goals with our technology.

Since accessibility is best achieved when it's considered at the beginning, we ask designers and developers who contribute or consume patternfly to understand how accessibility needs can be met. The following is a guide with some techniques on how to design, develop, and test UI to ensure that everyone has a good user experience.

- [Understanding Users’ Needs](#understanding-users-needs)
- [Checklists](#checklists)
  - [Design and Development Guidelines](#design-and-development-guidelines)
      - [What PatternFly Designers and Developers Should Address](#what-patternfly-designers-and-developers-should-address)
      - [What Product Developers and Designers Should Address](#what-product-developers-and-designers-should-address)
  - [Testing](#testing)
  - [Screen reader support](#screen-reader-support)
- [Methods](#methods)

## Understanding Users’ Needs

As with any design, it’s important to understand the user you’re designing for. To develop an inclusive design, it’s important to understand the different needs of [different users](https://a11yproject.com/posts/myth-accessibility-is-blind-people/), and consider the assistive tools and methods they use. The following are some of the ways we can help address these different needs.

### No Vision

Users with no vision rely on screen readers to access web sites and applications. Often, screen reader users will navigate a page by browsing specific elements on the page, like headers, links, or form elements. Using semantic elements and ensuring that these elements are still meaningful when pulled out of context is critical for the usability of the site.

### Low Vision

Users with low vision can have different needs depending on their eye condition. Needs can range from not relying on color to communicate information, color palettes that provide sufficient contrast, and a layout that is responsive when the user zooms in to magnify the contents of the screen.

### Motor

Users with poor motor control can use a range of devices to access contents. If these users are using only a keyboard, then they rely on all elements being keyboard accessible, with elements that have focus being highly visible. If these users are using a mouse or touch, then target areas should be large enough to be easy to hit.

### Cognitive

Users who have difficulty processing information benefit from contents that are well-written. They should be clear and concise, and structured so that the contents are easy to consume by scanning the page. Avoid long paragraphs.

Some users fall into just one category above, but it’s possible for a user to fall into more than one, or use tools and devices designed for a user group they don’t fall into. One of the greatest benefits of inclusive design practices is that methods that are designed for a specific user group will often provide benefits to all users.


## Checklists
### Design and Development Guidelines
The following are guidelines that we strive to adopt:
- The [A11Y Project Checklist](https://a11yproject.com/checklist) is a helpful checklist to start with if you’re new to accessibility.
- Our goal is to meet [level AA in the Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl). While these guidelines can seem like a lot, the following sections capture some of these by area of focus.

#### What PatternFly Designers and Developers Should Address

If you use patternfly, or contribute to patternfly as a designer or developer, these are the items that are expected to be covered in  PatternFly:

- Experience parity
  - There should be parity between the screen reader contents and visibly rendered contents (refer to the [first Note for aria-hidden](https://www.w3.org/TR/wai-aria/#aria-hidden)).
  - There should be parity among all input types: touch, mouse, keyboard. Don’t toggle states on hover. Don’t optimize the experience for one input type at the expense of another.
  - There should be parity between hover and focus events. Any information that’s available on hover should be available on focus, too.
- Semantic html structures are used to accurately communicate purpose and relationship of UI elements [design, html, css] ([WCAG 1.3.1](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize&showtechniques=131#qr-content-structure-separation-programmatic))
- Color is not the only method of communication - Providing meaning through color is supplementary to providing meaning with text [design, html, css] ([WCAG 1.4.1](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-visual-audio-contrast-without-color))
- Color contrast [css] ([WCAG 1.4.3](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-visual-audio-contrast-contrast))
- Font sizes can scale and the contents are functional and readable when the contents are doubled [css] ([WCAG 1.4.4](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-visual-audio-contrast-scale))
- Keyboard accessibility [html] ([WCAG 2.1.1 and 2.1.2](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#keyboard-operation))
- Order of elements in the HTML and in the layout follow a logical order [design, html, css] ([WCAG 1.3.2](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-content-structure-separation-sequence) and [WCAG 2.4.3](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-focus-order))
- Elements with focus are clearly visible [css] ([WCAG 2.4.7](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-focus-visible))
- An accessible name is provided for all elements [design, html] ([WCAG 4.1.2](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize&showtechniques=412#qr-ensure-compat-rsv))
- Target area for clickable elements is large enough and not overlapping [css] ([Accessible Styles for Responsive Design, Google Web Fundamentals](https://developers.google.com/web/fundamentals/accessibility/accessible-styles#multi-device_responsive_design))

#### What Product Developers and Designers Should Address

- Skip to Main links ([WCAG 2.4.1](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-skip))
- Page Titles ([WCAG 2.4.2](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-title))
- Links ([WCAG 2.4.4](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-refs)) - If more than one link has the same label, it should also have the same url. Screen reader users can access the list of links that are on a page, which pulls the links out of context. If you have links with different URLs but the same label, then add additional text to provide context to the screen reader user.
- Landmarks ([ARIA11](https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html)) - Use landmark roles to communicate page structure. If more than one landmark role occurs in the page, use aria-label to differentiate the landmark elements
- Headings ([WCAG 2.4.10](https://www.w3.org/WAI/WCAG20/quickref/?currentsidebar=%23col_customize#qr-navigation-mechanisms-headings) and [H42](https://www.w3.org/TR/WCAG20-TECHS/H42.html)) - Heading text should be descriptive. Correct heading levels should be used to communicate the outline of the page.
- Contents - Should be meaningful, clear, and concise


### Testing
To keep testing simple and easy to complete, we ask that contributors complete the following three types of tests to try to catch most of the accessibility issues that may be present:
- Test keyboard accessibility
- Disable styles to test the information architecture and presence of adequate text labels
- Test with any screen reader available in your operating system.

### Screen reader support
*Screen reader support is to be determined.*

## Methods

The [WCAG 2.0 techniques](https://www.w3.org/TR/WCAG20-TECHS/Overview.html#contents)   provide methods on how to meet accessibility guidelines. Additionally, as we discover techniques for specific interaction patterns, we'll document them here so that we can be consistent in our approach.
