## since some of the following operation maybe depreracated over time.
clear 
echo 
echo "HI $USER, You are running on UBUNTU: " `lsb_release  -c -r`

echo """
 this script helps you install your essential tools, let's go
"""

sudo apt-get update # on a fresh system, this is a MUST
sudo apt-get install tig git curl tree vim 

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

[push]
	default = current

""" >~/.gitconfig
echo "git config ... done!"
}
if test -f ~/.gitconfig ;then
	echo -n ".gitconfig exsits, overwrite? (Y/n): "
	read AAA
	if [ "${AAA:-y}" = "y" ];then

	config_git

	fi
fi

cd # go to $HOME
rm -rf Music  Templates  Videos Public Pictures Documents  Downloads  examples.desktop # rm folders I do not love



echo "gnome-terminal --full-screen" >~/ggg
mv ~/ggg ~/bin/
chmod +x ~/bin/ggg


######################################
#
#to enable bash vi mode, we need to add the following to $HOME/.bashrc
#    
#    set -o vi
#    bind -m vi-insert "\C-l":clear-screen
#
#and we may need to add this for vim launcing as well
#
#    alias e='vim'
#
