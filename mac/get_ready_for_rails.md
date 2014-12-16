I am using Mountain Lion now
### run mysql on startup

/Users/billie/Library/LaunchAgents 如果有 homebrew.mxcl.mysql.plist
这个文件，那么 mysql_safe 就会被呼叫，那么 mysql 就可用启动了

这个文件是 homebrew 自动添加的？我忘了，maybe I've done sth like `launchctl
load ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist`

### 修改 database.yml 文件

使用 Mac 上的 sock 位置

   socket: /tmp/mysql.sock

### 如果项目使用了 elasticsrarch

https://github.com/billie66/esdemo/issues/4

http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/#step-2
跟踪这里的步骤，发现我目前根本就没有装 gcc，所以 wget 报错可能也不奇怪了：


### install tools

```
  ~  wget
  dyld: Library not loaded: @@HOMEBREW_CELLAR@@/openssl/1.0.1f/lib/libcrypto.1.0.0.dylib
    Referenced from: /usr/local/opt/openssl/lib/libssl.1.0.0.dylib
    Reason: image not found
  [1]    4499 trace trap  wget
```

这次果然 wget 的错误没有了

- 现在开始安装 rbenv
  - https://github.com/sstephenson/rbenv#homebrew-on-mac-os-x
  - brew install rbenv ruby-build
  - rbenv install 1.9.3-p125

- .profile 中添加

    if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi

   - 这里有个问题，由于 zsh 会首先加载 .profile 再去加载 .zshrc
     所以很多东西如果加在 .profile 中就会被覆盖，例如 PATH
   - 所以最终需要把上面一行移动到 .zashrc 中才行

- rails related
  - gem install bundler
  - brew install mysql
   - https://github.com/MacMiniVault/Mac-Scripts/blob/master/mmvMySQL/mmvmysql.sh
   - to start mysql, just run $mysqld<enter>
   - ubuntu and mac has different socket location, to solve this:
     - sudo cd /var/run; sudo mkdir mysqld; cd mysqld; sudo ln -s
       /tmp/mysql.sock mysqld.sock
   - 现在运行 rake db:create;rake db:migrate done
   - 启动应用，试着去创建新的用户，提交表单报错：
     - Errno::EINVAL in UsersController#create Invalid argument - connect(2)
     - 数据居然还是存好了
     - 看来这是 resque 造成的错误，删掉一个 Mailer.deliver 错误就没有了
   - brew install redis
     - 现在如果我进入 ppweb 运行 restart_resque.sh 就会看到 Invalid argument -
       connect(2) 这个错误，看来这是 redis 报错
     - brew services restart redis
       brew services list
     - 这样报错就没有了
