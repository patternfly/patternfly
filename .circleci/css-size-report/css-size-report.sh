#!/bin/bash

# A simple script that will check to see if the previous patternfly has been installed to .circleci/css-size-report/nodemodules.
# this installtion is used to calculate size changes in css files..

cd $(dirname $0)

# log levels
INFO="INFO"
WARN="WARNING"
ERR="ERROR"

logMsg() {
  local _msg=${1}
  echo "${INFO}: ${_msg}"
}

logErr() {
  local _msg=${1}
  echo "${ERR}: ${_msg}"
}

setup() {
  if [ ! -d "./node_modules/@patternfly/patternfly" ]; then
    logMsg "setup previous version of patternfly for css comparisons"

    if npm i -D @patternfly/patternfly; then
      logMsg "setup ran successfully"
    else
      logErr "setup failed"
      exit 1
    fi

  else
    logMsg "setup already done"
  fi
}

run() {
  logMsg "generating css report differences"
  if node sizeReport.js; then
    logMsg "report ran successfully"
  else
    logErr "report failed"
    exit 1
  fi
}

## execute
setup
run
