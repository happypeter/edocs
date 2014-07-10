基于 ubuntu 12.04，

### create a linode,login as root, and create a common user for all the tasks

```
ssh root@the_ip_of_this_linode
adduser peter --ingroup sudo
su peter
cd # go to /home/peter
```

```
sudo apt-get install python-software-properties python g++ make 
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update

sudo apt-get install nodejs
sudo apt-get install git vim curl
git clone git@github.com:happypeter/peter-vim.git
mv peter-vim .vim
cp .vim/vimrc .vimrc

wget
https://gist.github.com/happypeter/5524086/raw/ea998d6681e098d13774791b63a62fc26733eeea/gitconfig
mv gitconfig ~/.gitconfig

sudo npm install -g nodemon
sudo apt-get install tmux
```
