#!/bin/bash

ICON_SRC='./src/icons/definitions/pf-icons.json'
ICON_OUT='./src/site/pages/icons.md'

echo "### PF icons" > $ICON_OUT
echo "| Icon name | Icon | Code |" >> $ICON_OUT
echo "| --- | --- | --- |" >> $ICON_OUT

grep ':' < $ICON_SRC | while read line; do
  CLASS=`echo $line | cut -d '"' -f2`
  echo '|' $CLASS '| <i class="pf-icon pf-icon-'$CLASS'"></i> | &lt;i class=&quot;pf-icon pf-icon-'$CLASS'&quot;&gt;&lt;/i&gt;'
done >> $ICON_OUT
