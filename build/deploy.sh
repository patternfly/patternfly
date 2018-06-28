#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  npm run semantic-release
fi