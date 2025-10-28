# WorkroomPlayTime035_CustomAsserts Workshop Testing Environment

This environment is pre-configured with both JavaScript and Python testing frameworks.

## Quick Start - Launch Codespace

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/workroomprds/WorkroomPlayTime035_CustomAsserts)

Once you can see this `readme.md` as a preview in codespaces, your VSCode extensions are running.
At that point, 
* check you can interact with the terminal,
* use `pwd` to check you're in the `/workspaces/WorkroomPlayTime035_CustomAsserts/` directory and
* run `bash .devcontainer/setup.sh` to go get all the dependencies. 


## Run JS tests (Mocha + Chai)

Navigate to the `javascript-project` directory:

```bash
cd javascript-project
```

Run tests:
```bash
npm test                # Run tests once
npm run test:watch      # Run tests in watch mode – it runs when you make a change
```

## Run Python tests (pytest)

Navigate to the `python-project` directory and activate the python venv:

```bash
cd python-project
source .venv/bin/activate
```

Run tests:
```bash
python -m pytest                  # Run all tests
python -m pytest -v               # Run with verbose output
python -m pytest tests/           # Run tests in specific directory
python -m pytest --cov            # Run with coverage report
```

## VS Code Integration 

_(is not working afaik, so this is asprirational)_

- Use the Test Explorer panel to run tests visually
- Python tests will appear automatically when you open Python files
- JavaScript tests are configured to work with the Mocha Test Explorer

