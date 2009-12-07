#!/bin/bash
########I think I should always be careful about cwd
cd /home/pet
mkdir abcd
cp edocs/private.tar.gz.gpg abcd/
cd abcd/
gpg -d private.tar.gz.gpg>private.tar.gz
tar zxvf private.tar.gz
cd private


