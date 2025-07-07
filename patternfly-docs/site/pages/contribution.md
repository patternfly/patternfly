---
id: contribution
title: Contribution guide
---

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

**3. Get help:**
- Join our [Slack community](https://patternfly.slack.com/) - `#patternfly-core` channel
- Read our [development guidelines](https://core-staging.patternfly.org/guidelines)
- Check existing [GitHub issues](https://github.com/patternfly/patternfly/issues)

## Code of Conduct

All contributors and participants agree to abide by the [PatternFly Code of Conduct](../../../CODE_OF_CONDUCT.md). Please read it before contributing.

## Pull request guidelines

In order to streamline reviews and set expectations, the following should be expected when submitting a pull request:

 - All pull requests should link to an issue that the work relates to.

 - A single reviewer should follow the PR through from start to finish after it has been submitted - if somebody else needs to follow it through to completion, please make that transition clear in the PR comments.

 - As much as possible, comments should be actionable. It should be clear to the contributor exactly what needs to change. If there are open questions that require in-depth conversation, consider meeting or using [slack](http://slack.patternfly.org) to quickly arrive at an actionable conclusion.

 - If the main issue has been addressed but there is still work that arises from the PR, please open an issue with the necessary information (and referencing this original PR) to follow up on afterwards.

 - The reviewer should consider the following as they review:
    1) Have all css naming conventions been followed?
    2) Have the classes been documented?
    3) Are all variables declared locally and referencing global defaults?
    4) Have you verified the examples match the design?
    5) Does the responsive behavior work correctly?
    6) Have the accessibility standards been followed?
    7) Is the example resilient - if you put more content in it, do things start to break?

### Submitting Pull Requests

1. **Create a descriptive title** following conventional commits
2. **Fill out the PR template** completely
3. **Include screenshots** for visual changes
4. **Link related issues** using GitHub keywords
5. **Ensure all checks pass** before requesting review

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
