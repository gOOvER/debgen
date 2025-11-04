#!/bin/bash
# Cloudflare Pages Build Script
set -e
echo "Starting build with npm..."
npm --version
node --version
npm run build
echo "Build completed successfully!"