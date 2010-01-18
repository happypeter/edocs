#!/bin/bash

sudo rm -rf /var/www/code
sudo rm -rf /var/www/pics
sudo cp -rf code /var/www/
sudo cp -rf pics /var/www/
sudo rm -rf /var/www/*.html
# need that emacs batch command as well
#maybe I should integrate this one and edocs-commit
