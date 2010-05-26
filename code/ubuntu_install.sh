echo "you are running on UBUNTU: " `lsb_release  -c -r`


** Mistake 
today I upgraded form 8.04 to 9.04, I chose
<example>
use entire disk
</example>
all my data gone, haha

** Simon Suggestion

 - have seperate partitions for /var and /home
 - use ext4, cause it is really faster

** from ubuntu.com
 - Update manager has a option to upgrade to higher version of the os, here is 8.10->9.04
 - ubuntu only support update form one version to its next one, no skip is allowed for security
 - I did a 9.04->9.10, and the sys became buggy

** *reinstallation.sh*
<example>
peter@cow:~$ sudo apt-get install emacs

peter@cow:~$ sudo apt-get install emacs-goodies-el
# I install goodies only for the twilight theme
# now cp edocs/ .emacs.d/  and .emacs here to ~/
# emacs is done, muse owrks

peter@cow:~$ sudo apt-get install git
peter@cow:~$ sudo apt-get install git-core
peter@cow:~$ sudo apt-get install gitk
##
#peter@cow:~$ cp /home/pet/.ssh/ .
#then git works perfectly now
##
peter@cow:~$ sudo apt-get install apache2
#we need to chown and chgrp /var/www to get the wirite access for muse

#Now I try
#apt-get install hplip
#and found it already installed, same is true for hplip-data
# and I think everything necessary for the printer as well
#then popup asked me if I want to install the properatery plugin
#I choose yes, but nothing happened, then I remember, I disabled every 
#option in Update Manager just now. So I need to fix it.
#### Update Manager
# this is necessary for many packages 
# you can not just ignore the Update Manager
# I only choose *secuity* here
# but even so, the followings got installed 
# the whole open-office 
# and firefox 
# a new kernel--- possiblely be used by virtualbox
# cups -------for printer
# when I finished this nothing happened
# so I start Update Manager again 
# and install all the *recommended* packages
# then popup shows up want me to install properatery driver
# so I did, and reboot, printer is alive.

</example>
