# WorkroomPlayTime035_CustomAsserts Workshop Testing Environment

This environment is pre-configured with both JavaScript and Python testing frameworks.

## JavaScript Project (Mocha + Chai)

Navigate to the `javascript-project` directory:

```bash
cd javascript-project
```

Run tests:
```bash
npm test                # Run tests once
npm run test:watch      # Run tests in watch mode
```

## Python Project (pytest)

Navigate to the `python-project` directory:

```bash
cd python-project
```

Run tests:
```bash
pytest                  # Run all tests
pytest -v               # Run with verbose output
pytest tests/           # Run tests in specific directory
pytest --cov            # Run with coverage report
```

## VS Code Integration

- Use the Test Explorer panel to run tests visually
- Python tests will appear automatically when you open Python files
- JavaScript tests are configured to work with the Mocha Test Explorer

## Quick Start

1. Open the integrated terminal
2. Choose either `javascript-project` or `python-project`
3. Start coding and testing!
