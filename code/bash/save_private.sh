#!/bin/bash
cd /home/pet
cd abcd/
tar zcvf private.tar.gz private/
gpg -c private.tar.gz
