#!/bin/bash

# Sanity Schema Sync Script
# This script syncs the local schemas to Sanity's backend

echo "Syncing Sanity schemas to backend..."

cd "$(dirname "$0")" || exit 1

# Use npx to run Sanity CLI with the project ID and dataset
# This will deploy the schemas from the code to Sanity's backend
npx sanity@latest schema push --force
