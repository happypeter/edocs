virtualbox

INStallation:

1. you have to issue $apt-get update   on a newly installed ubuntu 8.04/8.10

2. $apt-get install virtualbox

USAGE:

right Ctl to release to mouse

What you can do when virtualbox is naughty

alt+ctl+F1-------switch to tty0
alt+ctl+F7--------back to X
$ps aux | grep virtual | awk '{print $2}' | xargs kill -9     //kill virtualbox
virtualbox

===
I've done above successfully, but this time I failed since no kernel module is found, 
NOTE: the reason is my current kernel in use
peter@peter-dt:~/kdocs/linux/ubuntu$ uname -r
2.6.24-19-generic
is older then the virtual-box module


so I $sudo apt-get install virtualbox-ose-modules-generic
then 2.6.24-24-generic kernel and kernel-module are installed at the same time.
/boot/grub/menu.lst
is modified and 24 kernel is now the defualt, but 19 kernel is not removed.
reboot the machine.
then start virtualbox, now the problem is
<>
WARNING: You are not a member of the "vboxusers" group.  Please add yourself
         to this group before starting VirtualBox.
	 You will not be able to start VMs until this problem is fixed.
</>
which means I have no right to access the kernel module.
I can use "sudo -i" to fix this problem, but then I need to creat another machine

 sudo usermod -a -G vboxusers peter

logout and login, now it is done, haha
