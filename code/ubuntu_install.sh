
## since some of the following operation maybe depreracated over time.
clear 
echo 
echo "HI $USER, You are running on UBUNTU: " `lsb_release  -c -r`

echo """
 this script helps you install your essential softwares

 Do you want to continue [Y|n]?
"""

#peter@cow:~$ sudo apt-get install emacs

#peter@cow:~$ sudo apt-get install emacs-goodies-el
# I install goodies only for the twilight theme
# now cp edocs/ .emacs.d/  and .emacs here to ~/
# emacs is done, muse owrks
sudo apt-get update # on a fresh system, this is a MUST
sudo apt-get install tig

config_git()
{
echo "configuring git ..."
echo """

[user]
	name = Peter Wang
	email = happypeter1983@gmail.com
[core]
	editor = vim
[alias]
        ci = commit -a -v
        co = checkout
        st = status
        br = branch
        throw = reset --hard HEAD
	throwh = reset --hard HEAD^
[color]
        ui = true

[commit]
	template = ./.commit-template
[push]
	default = current

""" >~/.gitconfig
echo "git config ... done!"
}
if test -f ~/.gitconfig ;then
	echo -n ".gitconfig exsits, overwrite? (Y/n): "
	read AAA
#be sure to have a blank between "[" and "$AAA"
	if [ "${AAA:-y}" = "y" ];then

	config_git

	fi
fi
##FIXME: still not logically right

echo """
set incsearch

""">~/.vimrc
# "git-core" and  "git" will be installed as deps
# I do not love gitk anymore
# sudo apt-get install gitk

# we suppose your HOME is still ok, so no need to worry about .ssh/
#peter@cow:~$ cp /home/pet/.ssh/ .
cd # go to $HOME
rm -rf Music  Templates  Videos Public Pictures Documents  Downloads  examples.desktop # rm folders I do not love

## sudo apt-get install apache2
#we need to chown and chgrp /var/www to get the wirite access for muse

#Now I try
#apt-get install hplip
#and found it already installed, same is true for hplip-data
# and I think everything necessary for the printer as well
#then popup asked me if I want to install the properatery plugin
#I choose yes, but nothing happened, then I remember, I disabled every 
#option in Update Manager just now. So I need to fix it.
#### Update Manager
# this is necessary for many packages 
# you can not just ignore the Update Manager
# I only choose *secuity* here
# but even so, the followings got installed 
# the whole open-office 
# and firefox 
# a new kernel--- possiblely be used by virtualbox
# cups -------for printer
# when I finished this nothing happened
# so I start Update Manager again 
# and install all the *recommended* packages
# then popup shows up want me to install properatery driver
# so I did, and reboot, printer is alive.

sudo echo gnome-terminal >~/ggg
sudo mv ~/ggg /bin/
sudo chmod +x /bin/ggg
