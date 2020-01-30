#!/bin/bash

# A simple script that will check to see if the previous patternfly has been installed to .circleci/tmp/nodemodules.
# this installtion is used to calculate size changes in css files..

cd $(dirname $0)

if [ ! -d "./node_modules/@patternfly/patternfly" ]; then
  npm i -D @patternfly/patternfly
fi
