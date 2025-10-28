#!/bin/sh
set -eu

# Minimal apk update + essential packages (keeps image small)
sudo apt update
sudo apt install --no-cache bash git curl nodejs npm python3 py3-pip build-essential
sudo npm install -g mocha chai nodemon



# Use pip without cache to avoid extra layer size
PY_PKGS="pytest pytest-html pytest-cov pylint"
pip3 install --no-cache-dir $PY_PKGS

# Example: install small npm global tools if needed (keep to a minimum)
# npm install -g some-small-tool || true

npm test
pytest

echo "Setup complete."
