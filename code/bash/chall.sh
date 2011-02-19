#!/bin/bash
# change all ii into bb for all files in $PWD
# like vim bufdo 
for file in `find . -type f`
do
    sed -i 's/ii/bb/g' $file
done
