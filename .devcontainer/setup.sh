#!/bin/bash

# Update package lists
sudo apt-get update

# Install JavaScript dependencies globally
npm install -g mocha chai nodemon

# Install Python testing dependencies
pip3 install pytest pytest-html pytest-cov

# Install local npm dependencies
npm install

chmod +x .devcontainer/setup.sh

echo "Setup complete! Workshop environment is ready."
