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
- Check the [project board](https://github.com/orgs/patternfly/projects/7/views/27) for our currently planned work.

**3. Get help:**
- Join our [Slack community](https://patternfly.slack.com/) - `#patternfly-core` channel
- Read our [development guidelines](https://pf-core-staging.patternfly.org/guidelines)
- Check existing [GitHub issues](https://github.com/patternfly/patternfly/issues)

## Code of Conduct

All contributors and participants agree to abide by the [PatternFly Code of Conduct](https://github.com/patternfly/patternfly/blob/main/CODE_OF_CONDUCT.md). Please read it before contributing.

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

1. **Create a descriptive title** following [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
2. **Fill out the PR template** completely
3. **Include screenshots** for visual changes
4. **Link related issues** using GitHub keywords
5. **Ensure all checks pass** before requesting review

### Testing Your Changes

```bash
# Build the project
yarn build

# Run the development server
yarn start

# Run accessibility tests
yarn a11y

# Run linting
yarn lint
```

