基于 ubuntu 16.04，

### create a ECS

login as root, and create a common user for all the tasks

```
ssh root@the_ip_of_this_linode
adduser peter --ingroup sudo
su peter
cd # go to /home/peter
```


install nodejs via nvm

```
git clone git@github.com:happypeter/peter-vim.git
mv peter-vim .vim
cp .vim/vimrc .vimrc

sudo npm install -g nodemon
```
