#!/bin/bash
#!/bin/bash

if [ "$(id -u)" = "0" ]; then
   echo "This script must NOT be run as root, exit" 1>&2
   exit 1
fi

cd /home/pet/abcd/private/
rm -rf *~
echo "junk files removed---------------------------done"  
echo
echo -n "plz input commit msg for private/: "
read  MSG
echo -n "running git add"
git add .
echo  "---------------done"
git commit -a -m "${MSG:-private-defaut-msg}"

echo "git commit ------------done" 
echo "compress the file ----------done"
cd ..
tar zcvf private.tar.gz private/
echo -n "now encrypt it"
gpg -c private.tar.gz
echo "-------------done"
echo "cp it into edocs/"
mv private.tar.gz.gpg /home/pet/edocs/

##########I want to do a edocs commit for the modification of private.gpg
cd /home/pet/edocs/
rm -rf *~
echo "junk files removed---------------------------done"  
echo
echo -n "plz input commit msg for edocs/: "
read MSG
echo -n "running git add"
git add .
echo  "---------------done"
git commit -a -m "${MSG:-defaut-msg-for-private}"

echo "git commit ------------done" 
##restore former .emacs
mv   /home/pet/abcd/init-muse.emacs /home/pet/.emacs
rm -rf /home/pet/abcd/
