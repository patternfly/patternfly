#!/bin/bash

ICON_SRC='./src/icons/definitions/pf-icons.json'
ICON_OUT='./src/site/pages/icons.md'

echo "### PF Icons" > $ICON_OUT
echo "| icon name | icon | code |" >> $ICON_OUT
echo "| --- | --- | --- |" >> $ICON_OUT

grep '"' < $ICON_SRC | while read line; do
  CLASS=`echo $line | cut -d '"' -f2`
  echo '|' $CLASS '| <i class="pficon pficon-'$CLASS'-icon"></i> | &lt;i class=&quot;pficon pficon-'$CLASS'-icon&quot;&gt;&lt;/i&gt;'
done >> $ICON_OUT
