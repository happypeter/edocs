#!/bin/bash

sudo rm /var/www/*.html
sudo rm /var/www/css
sudo rm /var/www/code
sudo rm /var/www/pics
sudo cp -rf css /var/www/
sudo cp -rf code /var/www/
sudo cp -rf pics /var/www/

# need that emacs batch command as well
