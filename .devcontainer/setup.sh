#!/bin/sh
set -eux

# apt update + essential packages 
sudo apt-get update
sudo apt install -y nodejs npm
#sudo npm install -g mocha chai nodemon
sudo apt install -y bash git curl python3 python3-pip build-essential
sudo apt install -y python3-venv python3-pytest python3-pytest-cov 

# clean apt cache to reduce image size
sudo rm -rf /var/lib/apt/lists/*

# Ensure user-local bin is on PATH (for pip --user / pipx installs)
#export PATH="$HOME/.local/bin:$PATH"

# Install JS project dependencies so require('chai') and mocha are available locally
npm ci --prefix ./javascript-project install --no-audit --no-fund

# run js tests
npm --prefix ./javascript-project test

# Setup Python venv for python-project, install editable package so imports work, then run pytest
if [ -d ./python-project ]; then
  python3 -m venv ./python-project/.venv
  # shellcheck disable=SC1091
  . ./python-project/.venv/bin/activate
  python -m pip install --upgrade pip setuptools wheel

  # Install project in editable mode with dev dependencies
  python -m pip install -e "./python-project[dev]"

  # Run pytest from the project dir so pytest.ini / conftest are used
  ( cd ./python-project && pytest )
fi

echo "Setup complete."
