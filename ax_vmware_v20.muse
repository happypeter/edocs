On 73: we have the lastest vmserver installed on sp1
then we have 
<>
[root@dhcp24 /]# cd VMs00/
[root@dhcp24 VMs00]# ls
AXS3ORIx86     AXS3ORIx86_64_JUST_INSTALLED      AXS3ORIx86_JUST_INSTALLED  lost+found
AXS3ORIx86_64  AXS3ORIx86_64_UPDATE_TEST_SERVER  ISOs                       vmware2.0

</>

>>>how to add new machine
1. cd 73:/VMs00 
cp xxx xxx-d
2. add inventory
<>
Create Virtual Machine
Add Virtual Machine to Inventory  //click here
Add Datastore
Refresh Datastore
Rename Datastore
Remove Datastore
Configure Options
</>
3. change machine name
<>
Power On
Power Off
Suspend
Resume
Reset
Restart Guest
Shut Down Guest
Suspend Guest
Add Hardware
Snapshot
Take Snapshot
Revert to Snapshot
Remove Snapshot
Configure VM  //click here
Generate Virtual Machine Shortcut
</>
4. When vm asked you where this machine is from, answer "I copy it", so vmware will change the machine ID for you


>>>
I can take snapshot I can revert to it, but only one snapshot is allowed.
>>>click VirtualMachine->remove vm, to delete a machine, and its files.

>>>now the problem we can not login to use vmware, reboot the machine on which vmware is installed.
https://10.1.0.73:8333/ui/# works again

>>>how to creat a new machine.
1. click Virtaul Machine->delete Machine
2. <>
[root@dhcp24 AXS3ORIx86_64]# cp ../AXS3ORIx86_64_JUST_INSTALLED* .
[root@dhcp24 AXS3ORIx86_64]# pwd
/VMs00/AXS3ORIx86_64
</>
3. add inventory
4. config VM-----to change the machine name


>>>>Installation<<<<<
https://www.vmware.com/freedownload/login.php?product=server20
to download
ID: happypeter1983@gmail.com
PW: 111111
>>>serial number
VMware Server 2 for Linux 	A052X-F4DFV-UEPEL-49J8W
>>>
1. download the lastest rpm  for i386
2. rpm -Uvh ...
3. the error is
<>
You cannot install VMware Server on a system running a Xen kernel
</>
4.  vim /boot/grub/menu.lst  --------use normal kernel
5. 
<>
[root@localhost Desktop]# rpm -Uvh VMware-server-2.0.1-156745.i386.rpm
Preparing...                ########################################### [100%]
   1:VMware-server          ########################################### [100%]

The installation of VMware Server 2.0.1 for Linux completed successfully.
You can decide to remove this software from your system at any time by
invoking the following command: "rpm -e VMware-server".

Before running VMware Server for the first time, you need to
configure it for your running kernel by invoking the
following command: "/usr/bin/vmware-config.pl".

Enjoy,

    --the VMware team

[root@localhost Desktop]#                         
</>
6.answer all the question with default, until
<>
Do you want this program to probe for an unused private subnet? (yes/no/help)
[yes] no

What will be the IP address of your host on the private
network?

The answer "" is invalid.  It must be of the form a.b.c.d where a, b, c and d
are decimal numbers between 0 and 255.

What will be the IP address of your host on the private
network?

The answer "" is invalid.  It must be of the form a.b.c.d where a, b, c and d
are decimal numbers between 0 and 255.

What will be the IP address of your host on the private
network? 192.168.1.0

What will be the netmask of your private network? 255.255.255.0       
</>
<>
Please specify a port for remote connections to use [902]

Please specify a port for standard http connections to use [8222]

Please specify a port for secure http (https) connections to use [833

The current administrative user for VMware Server  is ''.  Would you
specify a different administrator? [no] yes

Please specify the user whom you wish to be the VMware Server adminis
 root

Using root as the VMware Server administrator.
</>
>>>Now in firefox https://127.0.0.1:8333/ui/#
root
111111
to login-------done
No sure if this reguires "service httpd start", or not.---Not needed.
>>> 
1.the default [stadard]
is 
/var/lib/vmware/Virtual Machines
I need to cp all isos here
2. but when I install plugin for consle then try to use the consloe 
"You have no permission to use the console."
3. however 5 mins later, I can use the console, do not know why
4. install--done, reboot----done
5. I can not ping vm guest machine, so I change adapeter form "NAT"->"briaged"
   and it works, ssh also works well now.

