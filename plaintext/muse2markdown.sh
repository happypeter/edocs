#!/bin/bash

## try to make a convertor here

############ one solution #############
# html2markdown convertor is available,http://www.aaronsw.com/2002/html2text/
# so I can convert all muse file to html
# and then html->markdown, then my work is done
# but It is better to change the html2text.py->muse2text.py
#######################################

##########################################################################
## <example> to a newline and indent lines go between
################
#cat new |sed 's/^<example>/\n/g'|sed 's/^<\/example>/\n/g'
#
#the above substitude <example> and </example> with 2 newlines
################
cat $1 |sed '/<example>/,/<\/example>/  s/^/    / '|sed 's/<example>/\n/g'|sed 's/<\/example>/\n/g' > $1".1"
## so the above handle the <example> block well now
###########################################################################



############################################################################
# "** header" -> "## header"

cat $1".1" |sed 's/^\*\* /## /' > $1".2"

# "^\*\*" means "**" leading a line
