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
