- if

```
if true; false; then echo hello; fi

if ls;cat ddd/; then echo hello; fi
```

  - bash if sees 0 as a case to execute `then` block, very different from C lanaguage. this is simple because if a command run without error, the exit status is 0, as `echo #?` shows


- chown

```
chown peter: file
chown :peter file #this makes chgrp no longer useful
```
- http://www.catonmat.net/blog/top-ten-one-liners-from-commandlinefu-explained

- Run the last command as root

```
$ sudo !!

$ ^foo^bar^
$ !whatever:p # Ctr-r is a better way then this
```

- curl
  - ref: https://www.youtube.com/watch?v=APtOavXTv5M&t=177s


- ref
  - http://www.catonmat.net/blog/top-ten-one-liners-from-commandlinefu-explained
  - http://www.commandlinefu.com/commands/browse
