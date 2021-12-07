## 安装

### ubuntu

```
sudo apt-get install -y gpg gpg-agent
```


### Mac

```
brew install gpg
```

### vim

系统上安装好 gpg 相关包之后之后，
vim 安装 [gpg.vim](https://www.vim.org/scripts/script.php?script_id=661)

然后再

```
vim xxx.gpg
```

注意：缺失 gpg-agent 会造成 vim 无法打开加密后的文件

## 基本使用

加密一个文件

```
gpg -c file
```

解密

```
$ gpg -d file.gpg>file
```
