#!/bin/bash

ICON_SRC='./src/icons/definitions/pf-icons.json'
ICON_OUT='./patternfly-docs/site/pages/icons.md'

echo "---" > $ICON_OUT
echo "id: Icons" >> $ICON_OUT
echo "---" >> $ICON_OUT
echo "| Icon name | Icon | Code |" >> $ICON_OUT
echo "| --- | --- | --- |" >> $ICON_OUT

grep ':' < $ICON_SRC | while read line; do
  CLASS=`echo $line | cut -d '"' -f2`
  echo '|' $CLASS '| <i class="pf-v5-c-icon pf-v5-c-icon-'$CLASS'"></i> | &lt;i class=&quot;pf-v5-c-icon pf-v5-c-icon-'$CLASS'&quot;&gt;&lt;/i&gt;'
done >> $ICON_OUT
