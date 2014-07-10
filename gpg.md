what is the realtionship between [[pgp]] and [[gpg]] ?

GNU Privacy Guard (GnuPG or GPG) is a free software alternative to the PGP suite of cryptographic software. 


man gpg ::

 It is a tool to provide digital encryption and signing services 

Note: check http://en.wikipedia.org/wiki/Asymmetric_key_algorithm to see what is =digital encryption and signing=


** great doc
http://www.dewinter.com/gnupg_howto/english/GPGMiniHowto.html

*** test
<example>

pet@girl:~/xxx$ gpg -e -r peter dd
pet@girl:~/xxx$ gpg -d dd.gpg>ddddd

</example>
now to a folder
<example>
pet@girl:~$ tar cvf xxx.tar xxx
xxx/
xxx/dd.gpg
xxx/ddddd
pet@girl:~$ ls
dd  Desktop  edocs  github  kdocs  xxx  xxx.tar
pet@girl:~$ gpg  -r peter -e xxx.tar 
pet@girl:~$ ls
dd  Desktop  edocs  github  kdocs  xxx  xxx.tar  xxx.tar.gpg
pet@girl:~$ mkdir ddddd
pet@girl:~$ mv xxx.tar.gpg  ddddd/
pet@girl:~$ cd ddddd/
pet@girl:~/ddddd$ ls
xxx.tar.gpg
pet@girl:~/ddddd$ gpg -d xxx.tar.gpg -o d.tar
usage: gpg [options] --decrypt [filename]
pet@girl:~/ddddd$ gpg -d xxx.tar.gpg >d.tar

You need a passphrase to unlock the secret key for
user: "peter king (hi) <g@g.com>"
2048-bit ELG-E key, ID 3EDF51F9, created 2009-11-23 (main key ID 51B133C3)

gpg: encrypted with 2048-bit ELG-E key, ID 3EDF51F9, created 2009-11-23
      "peter king (hi) <g@g.com>"
pet@girl:~/ddddd$ ls
d.tar  xxx.tar.gpg
pet@girl:~/ddddd$ tar xvf d.tar 
xxx/
xxx/dd.gpg
xxx/ddddd
pet@girl:~/ddddd$ ls
d.tar  xxx  xxx.tar.gpg
pet@girl:~/ddddd$ 
</example>

[[seahorse]]

** go with no key

<example>
pet@girl:~$ ls
dd  Desktop  edocs  github  kdocs
pet@girl:~$ gpg -c dd
pet@girl:~$ ls
dd  dd.gpg  Desktop  edocs  github  kdocs
pet@girl:~$ gpg -d dd.gpg 
gpg: CAST5 encrypted data
gpg: encrypted with 1 passphrase
iii
gpg: WARNING: message was not integrity protected
pet@girl:~$ gpg --version
gpg (GnuPG) 1.4.9
</example>

below is to decrypt it in asianux with no key
<example>
[root@dhcp28 pet]# gpg -d dd.gpg
gpg: directory `/root/.gnupg' created
gpg: new configuration file `/root/.gnupg/gpg.conf' created
gpg: WARNING: options in `/root/.gnupg/gpg.conf' are not yet active during this run
gpg: keyring `/root/.gnupg/secring.gpg' created
gpg: keyring `/root/.gnupg/pubring.gpg' created
gpg: CAST5 encrypted data
gpg: encrypted with 1 passphrase
ehlool iii
gpg: WARNING: message was not integrity protected
[root@dhcp28 pet]# gpg --version
gpg (GnuPG) 1.4.5
</example>
so it works, haha
try the same thing to my photoes in a tgz file, works!
NOte: =WARNING: message was not integrity protected=, does this mean
if I do encryption with a key, the *integraty* check will be done during decryption?
if so, it will be nice
