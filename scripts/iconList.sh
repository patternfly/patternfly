#!/bin/bash

ICON_SRC='./src/icons/definitions/pficons.mjs'
ICON_OUT='./patternfly-docs/site/pages/icons.md'

echo "---" > $ICON_OUT
echo "id: Icons" >> $ICON_OUT
echo "---" >> $ICON_OUT
echo "| Icon name | Icon | Code |" >> $ICON_OUT
echo "| --- | --- | --- |" >> $ICON_OUT

grep ':' < $ICON_SRC | while read line; do
  CLASS=`echo $line | cut -d '"' -f2`
  echo '|' $CLASS '| <i class="pf-v6-pficon pf-v6-pficon-'$CLASS'"></i> | &lt;i class=&quot;pf-v6-pficon pf-v6-pficon-'$CLASS'&quot;&gt;&lt;/i&gt;'
done >> $ICON_OUT
