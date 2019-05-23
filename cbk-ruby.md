## Upgrade ruby

➜  ckb-mining ruby --version
ruby 2.3.7p45


but https://github.com/nervosnetwork/ckb-sdk-ruby#ckb-sdk-ruby requires sth higher version

git clone https://github.com/rbenv/rbenv.git ~/.rbenv
 cd ~/.rbenv && src/configure && make -C src
rbenv install 2.6.0
rbenv global   2.6.0 
gem install bundler:2.0.1

add the below to .zshrc

export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"

now start a new terminal 

➜  ~ ruby --version
ruby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-darwin18]

now we are good to go
Try to install ckb-ruby-sdk

brew tap nervosnetwork/tap
brew install libsodium libsecp256k1


gem update --system

is needed to fix the error running  `bin/console` 

you must have bundler 2 to use this lockfile
