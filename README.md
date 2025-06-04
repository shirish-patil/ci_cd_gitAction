# PERM Status Checker

An automated testing suite for monitoring PERM (Program Electronic Review Management) processing times and case status using Cypress with Cucumber BDD (Behavior-Driven Development).

## Overview

This project automates the process of checking PERM processing times and case status on the Department of Labor website. It uses:
- Cypress for end-to-end testing
- Cucumber for BDD implementation
- Page Object Model for maintainable test structure
- GitHub Actions for CI/CD automation

## Features

- Automated checks for PERM processing times
- Case status verification with case numbers
- BDD (Behavior-Driven Development) with Cucumber
- Page Object Model implementation
- Daily automated test runs at 9 AM UTC
- Automatic test runs on every push to main branch
- Test results (videos and screenshots) saved as artifacts

## Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shirish-patil/ci_cd_gitAction.git
cd ci_cd_gitAction
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── perm-status.feature    # Cucumber feature files
│   │   └── pages/
│   │       └── PermStatusPage.js      # Page Object Model
│   └── support/
│       └── step_definitions/
│           └── perm-status.steps.js   # Step definitions
├── .github/
│   └── workflows/
│       └── daily-test.yml            # GitHub Actions workflow
└── cypress.config.js                 # Cypress configuration
```

## Running Tests

### Local Development

To run the tests locally:

```bash
# Run all tests
npx cypress run --spec "cypress/e2e/features/perm-status.feature"

# Open Cypress Test Runner
npx cypress open
```

### CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

1. **Daily Automated Runs**
   - Tests run automatically at 9 AM UTC every day
   - Results are saved as artifacts

2. **Push-Triggered Runs**
   - Tests run automatically on every push to the main branch
   - Ensures code quality with each change

3. **Manual Trigger**
   - Tests can be run manually through GitHub Actions UI
   - Useful for testing specific scenarios

## Test Scenarios

The test suite includes the following scenarios:

1. **PERM Processing Times Check**
   - Verifies the current processing times for Analyst Review
   - Validates the displayed month and year

2. **Case Status Verification**
   - Checks the status of a specific PERM case
   - Validates the case number and status information

## CI/CD Configuration

The GitHub Actions workflow (`daily-test.yml`) is configured to:

1. **Environment Setup**
   - Uses Ubuntu latest runner
   - Sets up Node.js v16
   - Installs project dependencies

2. **Test Execution**
   - Runs Cypress tests in headless mode
   - Generates videos and screenshots
   - Uploads test results as artifacts

3. **Artifact Management**
   - Saves test videos and screenshots
   - Makes results available for download
   - Preserves test evidence for analysis

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## License

[Your chosen license]

## Support

For any issues or questions, please:
1. Check the existing issues
2. Create a new issue if needed
3. Provide detailed information about the problem 