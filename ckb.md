# Nerovs CKB 相关

- 如何转账
  - 下载钱包 https://github.com/nervosnetwork/neuron/releases
  - shasum -a 256 file 对一下
  

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


## transaction with Neuron



转一些  CKB 到火币钱包：现在是下午4：50，已经操作了3个小时了，还是没有转账成功

- neuron 转账就是会失败，设置比默认更高的手续费也不行。
  - 失败原因是区块还在同步过程中，同步了一下午，钱包 tab 下，看不到“正在同步”界面了
    - 发送一下，几秒钟就看到“xx个确认”
    - 30个确认后，火币就收到了，前后两三分钟的事
  - 如果输错了地址或者密码，Neuron 会提醒
- 大概300个 commit 之后，Neuron 自己才会把交易状态从“确认中”转为“成功”
