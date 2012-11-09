clear 
echo 
echo "=== HI $USER, You are running on UBUNTU: " `lsb_release  -c -r`

echo """
 this script helps you install your essential tools, let's go
"""

sudo apt-get update # on a fresh system, this is a MUST
sudo apt-get -y install tig xclip git curl tree vim  openssh-server

config_ssh()
{
    ssh-keygen -t dsa
    echo -n "=== copying public key to clipboard..."
    echo "=== done"
    echo "=== now paste your public key to github->account->sshkey "
    echo "=== and press Enter to continue"
    read AAA
}

echo "=== now config ssh..."
if [ -f ~/.ssh/id_dsa ] || [ -f ~/.ssh/id_rsa]
then
    echo === old keys found
    echo "=== do nothing..."
else
    config_ssh
fi

config_git()
{
echo "=== configuring git ..."
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
if [ -f ~/.gitconfig ] ;then
    echo -n ".gitconfig exsits, overwrite? (Y/n): "
    read AAA
    if [ "${AAA:-y}" = "y" ];then
        config_git
    fi
else
    echo -n "~/.gitconfig not found, create it? (Y/n): "
    read AAA
    if [ "${AAA:-y}" = "y" ];then
        config_git
    fi
fi

cd ~
rm -rf Music  Templates  Videos Public Pictures Documents  Downloads  examples.desktop # rm folders I do not love

config_vim()
{
    cd ~
    if [ -d peter-vim ]
    then
        rm -rf peter-vim
    fi
    git clone git@github.com:happypeter/peter-vim.git && mv peter-vim .vim \
    && cd .vim && git checkout peter-private 
    cd ~
    rm -rf ~/.vimrc
    ln -s ~/.vim/vimrc ~/.vimrc
    sudo apt-get -y install ctags
}

if [ -d ~/.vim ] ;then
    echo -n "=== .vim exsits, replace? (Y/n): "
    read AAA
    if [ "${AAA:-y}" = "y" ];then
        rm -rf ~/.vim 
        config_vim
    fi
else
    echo -n "=== ~/.vim not found, create it? (Y/n): "
    read AAA
    if [ "${AAA:-y}" = "y" ];then
        config_vim
    fi
fi

echo "gnome-terminal --full-screen" >~/ggg
sudo mv ~/ggg /bin/ # this may not work if you put it into ~/bin
chmod +x /bin/ggg



clone_github_repo()
{
    mkdir  ~/bin 2>/dev/null
    echo "git clone git@github.com:happypeter/'$1'" >~/bin/git_my_repo
    chmod +x ~/bin/git_my_repo
}

clone_github_repo
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
# have this for .inputrc
#
#    set completion-ignore-case on
#    set completion-prefix-display-length 2
#
