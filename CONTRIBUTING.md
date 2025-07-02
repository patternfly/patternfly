# Contributing to PatternFly

> **Looking for a quick guide to PatternFly Core Contribution?** [Go Here](https://www.patternfly.org/get-started/contribute)

## Outline

- [Quick Start for New Contributors](#quick-start-for-new-contributors)
- [Community Contributors Hall of Fame](#community-contributors-hall-of-fame)
- [Code of Conduct](#code-of-conduct)
- [Issues and Project Board](#issues-and-project-board)
- [Creating Issues for New Components](#creating-issues-for-new-components)
- [Contributing Components](#contributing-components)
- [Adding Styling for your Components](#adding-styling-for-your-components)
- [Guidelines and Requirements](#guidelines-and-requirements)
- [HTML/CSS Component Requirements](#htmlcss-component-requirements)
- [Code Consistency](#code-consistency)
- [Code Contribution Guidelines](#code-contribution-guidelines)
- [AI-Assisted Development Guidelines](#ai-assisted-development-guidelines)
- [Troubleshooting](#troubleshooting)

## Quick Start for New Contributors

New to contributing to PatternFly? Here's how to get started quickly:

**1. Set up your development environment:**
```bash
# Clone the repository
git clone https://github.com/patternfly/patternfly.git
cd patternfly

# Install dependencies (requires Node.js v18.0.0+)
yarn install

# Start the development server
yarn start

# Open your browser to http://localhost:8001
```

**2. Find your first contribution:**
- Browse [good first issues](https://github.com/patternfly/patternfly/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)
- Look for [help wanted](https://github.com/patternfly/patternfly/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) issues
- Check the [project board](https://github.com/orgs/patternfly/projects) for approved work

**3. Make your contribution:**
- Create a new branch for your work
- Follow our [code contribution guidelines](#code-contribution-guidelines)
- Test your changes locally
- Submit a pull request

**4. Get help:**
- Join our [Slack community](https://patternfly.slack.com/) - `#patternfly-core` channel
- Read our detailed [development guidelines](https://core-staging.patternfly.org/guidelines)
- Check existing [GitHub issues](https://github.com/patternfly/patternfly/issues)

## Community Contributors Hall of Fame

We're grateful for all our community contributors! Here are our top contributors who have made significant impact on the PatternFly project in the past 12 months (as of July 1, 2025):

### Top Contributors 🌟

- **@sg00dwin** 

## Code of Conduct

All contributors and participants agree to abide by the [PatternFly Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## Issues and Project Board

We use GitHub issues to track bugs, enhancements, and new component requests. Our [project board](https://github.com/orgs/patternfly/projects) helps organize and prioritize work.

**Before creating a new issue:**
1. Search existing issues to avoid duplicates
2. Check our [documentation](https://www.patternfly.org/) to confirm the issue
3. Use the appropriate issue template

## Creating Issues for New Components

When requesting a new component:

1. **Use the component request template**
2. **Provide design mockups** showing the component in context
3. **Include use cases** explaining when/why the component would be used
4. **Reference existing patterns** in PatternFly or other design systems
5. **Consider accessibility** requirements from the start

**New components should:**
- Follow PatternFly design principles
- Have clear use cases that aren't covered by existing components
- Be reusable across different contexts
- Meet accessibility standards (WCAG 2.0 AA)

## Contributing Components

### Development Process

1. **Issue Discussion:** All components start with an issue discussion
2. **Design Review:** UX team reviews and approves the component design
3. **Implementation:** Develop the HTML/CSS following our guidelines
4. **Testing:** Ensure accessibility compliance and cross-browser support
5. **Documentation:** Update examples and documentation
6. **Review:** Code review and approval from maintainers

### Component Structure

New components should follow this structure:
```
src/patternfly/components/ComponentName/
├── component-name.scss          # Main component styles
├── component-name-*.scss        # Additional component files
├── examples/
│   ├── ComponentName.md        # Documentation
│   └── *.html                  # Example files
└── index.scss                  # Component entry point
```

## Adding Styling for your Components

### CSS Guidelines

- **Use CSS custom properties** for theming and customization
- **Follow BEM methodology** for class naming
- **Use semantic HTML** elements when possible
- **Ensure responsive design** across all breakpoints
- **Support both light and dark themes**

### Sass Guidelines

- **Use PatternFly tokens** for spacing, colors, and typography
- **Follow the existing file structure** and naming conventions
- **Include mixins** for common patterns
- **Document custom properties** and their intended use

### Example Component CSS:
```scss
// component-name.scss
.pf-v6-c-component-name {
  // CSS custom properties
  --pf-v6-c-component-name--FontSize: var(--pf-v6-global--FontSize--md);
  --pf-v6-c-component-name--Color: var(--pf-v6-global--Color--100);
  
  // Base styles
  font-size: var(--pf-v6-c-component-name--FontSize);
  color: var(--pf-v6-c-component-name--Color);
}
```

## Guidelines and Requirements

### HTML/CSS Component Requirements

**All components must:**

1. **Follow semantic HTML** patterns
2. **Include ARIA attributes** for accessibility
3. **Support keyboard navigation** where applicable
4. **Work across supported browsers** (latest 2 versions of Chrome, Firefox, Safari, Edge)
5. **Be responsive** and work on mobile devices
6. **Support theming** through CSS custom properties
7. **Include comprehensive examples** showing different states
8. **Pass accessibility audits** using our aXe testing

### Accessibility Requirements

- Meet WCAG 2.0 AA standards
- Include proper ARIA labels and roles
- Support keyboard navigation
- Provide sufficient color contrast
- Include focus indicators
- Work with screen readers

### Browser Support

PatternFly supports the latest two major versions of:
- Chrome
- Firefox  
- Safari
- Edge

## Code Consistency

### CSS Naming Conventions

- Use BEM methodology: `.pf-v6-c-component-name__element--modifier`
- Prefix all PatternFly classes with `.pf-v6-`
- Components use `.pf-v6-c-` prefix
- Layouts use `.pf-v6-l-` prefix
- Utilities use `.pf-v6-u-` prefix

### File Naming

- Use kebab-case for file names: `component-name.scss`
- Match component class names: `.pf-v6-c-component-name` → `component-name.scss`

### Code Formatting

- Use Prettier for consistent formatting
- Follow existing indentation and spacing
- Use meaningful variable names
- Add comments for complex logic

## Code Contribution Guidelines

### Before You Start

1. **Check existing issues** to avoid duplicate work
2. **Discuss major changes** in issues before implementing
3. **Fork the repository** and create a feature branch
4. **Keep changes focused** - one feature/fix per PR

### Making Changes

1. **Write semantic HTML** following web standards
2. **Use PatternFly design tokens** for consistency
3. **Include responsive styles** for all screen sizes
4. **Add comprehensive examples** showing component usage
5. **Update documentation** as needed

### Testing Your Changes

```bash
# Run the development server
yarn start

# Run accessibility tests
yarn a11y

# Run linting
yarn lint

# Run Prettier
yarn prettier

# Build the project
yarn build
```

### Submitting Pull Requests

1. **Create a descriptive title** following conventional commits
2. **Fill out the PR template** completely
3. **Include screenshots** for visual changes
4. **Link related issues** using GitHub keywords
5. **Ensure all checks pass** before requesting review

## AI-Assisted Development Guidelines

AI-generated code can be accepted as a contribution to this project as long as the contributor follows the following guidance.

When using AI coding assistants (such as GitHub Copilot, ChatGPT, Claude, or other similar tools) to help with development work on PatternFly, please follow these guidelines to ensure code quality, security, and transparency:

### Human in the loop: Verify and validate AI-generated code

- **Treat AI-generated code as suggestions, not final code.** Review all generated code and modify as appropriate. Thoroughly review and test all code that you intend to integrate into your work.

- **Do not blindly trust the code assistant output.** Always apply your own judgment and expertise. AI coding assistants can introduce security vulnerabilities if not used carefully, and AI models can sometimes hallucinate and provide incorrect or non-functional code.

- **Make sure you thoroughly understand any AI-generated code.** If the generated code you intend to incorporate in your work is outside your expertise, consult with someone knowledgeable in the area prior to making it available to others within Red Hat or externally.

### Mark code with substantial AI-generated portions

Nontrivial and substantial AI-generated or AI-assisted content should be "marked" in appropriate cases. In deciding how to approach this, consider adopting one or more of the following recommendations:

- **In a commit message, or in a pull request/merge request description field,** identify the code assistant that you used, perhaps elaborating on how it was used. You may wish to use a trailer like "Assisted-by:" or "Generated-by:". For example:

  ```
  Assisted-by: GitHub Copilot
  Generated-by: ChatGPT for initial component structure
  ```

- **In a source file comment,** indicate the use of the code assistant. For example:

  ```scss
  // Generated by GitHub Copilot
  // AI-assisted implementation with human review and modifications
  .pf-v6-c-component-name {
    // Optimized CSS properties based on AI suggestions
    --pf-v6-c-component-name--FontSize: var(--pf-v6-global--FontSize--md);
  }
  ```

### Additional considerations

- **Security review:** Pay special attention to security implications of AI-generated code, especially when dealing with user input, authentication, or data handling.
- **Testing:** Ensure that AI-generated code is thoroughly tested and meets all existing project standards for testing coverage.
- **Code style:** Verify that AI-generated code follows PatternFly's coding standards and style guidelines as outlined in this document.
- **Documentation:** If AI assists in generating documentation or comments, review them for accuracy and completeness.

## Troubleshooting

### Common Issues and Solutions

**Build Failures:**
- Ensure you're using Node.js version 18 or higher: `node --version`
- Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
- Clear yarn cache: `yarn cache clean`

**Test Failures:**
- Run accessibility tests: `yarn a11y`
- Check for console errors in browser dev tools
- Verify examples render correctly at `http://localhost:8001`

**Linting Errors:**
- Auto-fix linting issues: `yarn lint --fix`
- Format code with Prettier: `yarn prettier`
- Check Sass syntax: `yarn sass-lint`

**Development Server Issues:**
- Clear cache and restart: `rm -rf .cache && yarn start`
- Check if port 8001 is already in use and kill the process if needed
- Try running `yarn build && yarn serve` for production build testing

**CSS/Styling Issues:**
- Check browser dev tools for CSS errors
- Verify CSS custom properties are defined
- Test across different browsers and screen sizes
- Run visual regression tests: `yarn screenshots`

**Accessibility Issues:**
- Run aXe audit: `yarn a11y`
- Test with keyboard navigation
- Verify screen reader compatibility
- Check color contrast ratios

**Integration Issues:**
- Ensure your branch is up to date with the latest changes before submitting PR
- Squash commits related to a single issue before submitting
- Test with different consuming applications

**Still having issues?**
- Check existing [GitHub issues](https://github.com/patternfly/patternfly/issues)
- Ask for help in [PatternFly Slack](https://patternfly.slack.com/) `#patternfly-core` channel
- Create a new issue with detailed error information
