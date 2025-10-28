#!/bin/sh
set -eu

# Minimal apk update + essential packages (keeps image small)
apk update
apk add --no-cache bash git curl nodejs npm python3 py3-pip build-base

# Use pip without cache to avoid extra layer size
PY_PKGS="pytest"
pip3 install --no-cache-dir $PY_PKGS

# Example: install small npm global tools if needed (keep to a minimum)
# npm install -g some-small-tool || true

echo "Setup complete."
