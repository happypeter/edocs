* virtualbox here

* full-screen does not work after guest os update

  so the fix is to install VM addition again, but when I try to do it with device->install addtions
  failed with the error:"can not mount the iso"

  the fix: go to the lower right corner of VM, click the litter disc icon and unount the iso there first.

* can't restore back to right ratio for my screen(16:9) (tried on my Mac+ubuntu12.04)
  view -> auto resize guest display(HOST+G)

* Virtualbox 4.0 or higher

  resize harddisk

   VBoxManage modifyhd ubuntu11.04.vdi --resize 40000

  http://www.virtualbox.org/manual/ch08.html

  The --resize option allows you to change the capacity of an existing image; this adjusts the logical size of a virtual disk without affecting the physical size much.[37] This currently works only for expanding the capacity of VDI and VHD formats, and only for the dynamically allocated variants. For example, if you originally created a 10G disk which is now full, you can use the --resize 15360 command to add 5 GByte more space to the virtual disk without having to create a new image and copy all data from within a virtual machine.

* scp

  u need to device->network device and choose `bridged`, then reboot vm, now
  the ip of vm and real machince are on same net seg, so that scp is possiable

* install addon in 10.04

     sudo apt-get install virtualbox-guest-additions

  then go to virtualbox->device->install addon

  there are lots of .exe files in the popped CD, but it runs in ununtu (as guest
  OS) by clicking autorun.xxx. anyway, things works beaultifully well after you
  reset virtualbox once


- install nodejs on ubuntu 1404
  http://stackoverflow.com/questions/16302436/install-nodejs-on-ubuntu-12-10

- 一定要把 vm->settings->display->video memory 调高一些，一定一定
  - http://www.omgubuntu.co.uk/2014/04/ubuntu-14-04-classic-gnome-flashback-session
  - 还是需要干掉 unity，浏览网页的时候才会滚动自然
  - gnome-flashback 有问题，还是用 unity 吧，不是太慢。

- sougou
  http://askubuntu.com/questions/450255/installing-sogou

- 1404 remove login keyring, otherwise if bump up everytime you open chrome
  and asking "type in password to unlock your keyring"
  application->system tools->preferences->password and keys -> right click the
"login" -> set password to blank
