#!/bin/sh
set -eu

# apt update + essential packages 
sudo apt update
sudo apt install npm
sudo npm install -g mocha chai nodemon
sudo apt install bash git curl nodejs npm python3 python3-pip build-essential
sudo apt install python3-venv python3-pytest python3-pytest-cov 

# Install JS project dependencies so require('chai') and mocha are available locally
npm --prefix ./javascript-project install --no-audit --no-fund

# Use pip without cache to avoid extra layer size
#PY_PKGS="pytest pytest-html pytest-cov pylint"
#pip3 install $PY_PKGS

# Example: install small npm global tools if needed (keep to a minimum)
# npm install -g some-small-tool || true

npm --prefix ./javascript-project test
( cd ./python-project && PYTHONPATH=. python3 -m pytest )

echo "Setup complete."
