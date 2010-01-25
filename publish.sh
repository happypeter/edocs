#!/bin/bash

sudo rm -rf /var/www/pics
sudo cp -rf css /var/www/
sudo cp -rf pics /var/www/
sudo rm -rf /var/www/*.html
# need that emacs batch command as well
#maybe I should integrate this one and edocs-commit
#new system is in use
