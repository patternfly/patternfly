#!/bin/bash
#
# A simple script that will do the following:
#   - install previous version of patternfly to .circleci/css-size-report/nodemodules.
#   - run nodeJS script that will compare current changed css file sizes to the previous version.
#
cd $(dirname $0)

# process cli args
usage() { echo "Usage: $0 [-c <run|clean>] [-p <package_name>]" 1>&2; exit 1; }

while getopts ":c:p:" o; do
    case "${o}" in
        c)
            CMD=${OPTARG}
            ((s == run || s == clean)) || usage
            ;;
        p)
            PACKAGE=${OPTARG}
            ;;
        *)
            usage
            ;;
    esac
done
shift $((OPTIND-1))

if [ -z "${CMD}" ] || [ -z "${PACKAGE}" ]; then
    usage
fi

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
  if ! npm ls ${PACKAGE} > /dev/null 2>&1 && ! npm i -D ${PACKAGE}; then
    logErr "setup failed"
    exit 1
  fi
}

run() {
  if ! node sizeReport.js ${PACKAGE} ; then
    logErr "report failed"
    exit 1
  fi
}

clean() {
  npm uninstall -D ${PACKAGE}
  rm -rf node_modules
}

## execute
if [ "${CMD}" == "run" ]; then
  setup
  run
elif [ "${CMD}" == "clean" ]; then
  clean
else
  usage
fi


