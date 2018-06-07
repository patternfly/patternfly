#!/bin/bash
if [ "$TRAVIS_BRANCH" == "release" ]; then
  npm run semantic-release
fi