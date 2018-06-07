#!/bin/bash
#grep -r -i -o "pf-m-[a-zA-Z]*" --include \*.scss ./src/patternfly
grep -i -o -h "pf-m-[a-zA-Z]*\b" `find ./src/patternfly -name \*.scss` \
  | awk -F' ' '{printf "- "$1"\n"}' \
  | sort -u > ./src/site/pages/modifiers.md