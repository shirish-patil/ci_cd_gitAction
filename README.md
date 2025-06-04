# PERM Status Checker

Automated testing suite for checking PERM processing times and case status using Cypress with Cucumber BDD.

## Features

- Automated checks for PERM processing times
- BDD (Behavior-Driven Development) with Cucumber
- Page Object Model implementation
- Daily automated test runs at 9 AM UTC

## Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd permStatusChecker
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

To run the tests locally:

```bash
npx cypress run --spec "cypress/e2e/features/perm-status.feature"
```

To open Cypress Test Runner:

```bash
npx cypress open
```

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── perm-status.feature
│   │   └── pages/
│   │       └── PermStatusPage.js
│   └── support/
│       └── step_definitions/
│           └── perm-status.steps.js
├── .github/
│   └── workflows/
│       └── daily-test.yml
└── cypress.config.js
```

## CI/CD

The project uses GitHub Actions to run tests automatically:
- Daily at 9 AM UTC
- On every push to main branch
- Can be triggered manually through GitHub Actions UI

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[Your chosen license] 