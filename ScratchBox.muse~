last changed in 10_26_2008 
 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
install_sdk 
 
 
see ./scrathbox/doc/to_begin_with first 
now for the sake of add all i need to scratchbox, 
i issue 
$sh maemo-sdk-install_4.1.sh 
when all files are downloaded properly 
a error occur becaue scratchbox is opening, 
so i close it and $sh maemo-sdk-install_4.1.sh again 
now a blue screen shows up and i choose 
4 Runtime Environment + All Dev and Dbg Packages 
then after a few OKs, many libs are installed, including 
libgtk. I still remember when i was trying to compile the gtk-hello world 
just now, a error was seen due to the absence of libdtk. 
 
$sudo apt-get install xserver-xephyr -------------------done^_^ 
after this. Nokia EUSA binaries are install successfully by 
[sbox-DIABLO_ARMEL: ~] > fakeroot apt-get install maemo-explicit 
*************** 
now i 
[sbox-DIABLO_ARMEL: ~] >tar zxvf /scratchbox/packages/gtk-hello 
[sbox-DIABLO_ARMEL: ~] >cd gtk-hello 
[sbox-DIABLO_ARMEL: ~] >./autogen 
[sbox-DIABLO_ARMEL: ~] >make 
the work is done, a hello for ARM is obtained. 
[sbox-DIABLO_ARMEL: ~] >./hello 
can not open display 
now see ../../ref/Maemo_Diablo_Reference_Manual_for_maemo_4.1: 
3.4.4 Starting Virtual X Server (Xephyr) 
and i know all i need to do are: 
user@system:~$ Xephyr :2 -host-cursor -screen 800x480x16 -dpi 96 -ac \ 
-extension Composite 
[sbox-DIABLO_ARMEL: ~] >export DISPLAY=:2 
[sbox-DIABLO_ARMEL: ~] >./hello 
now, you see the GUI in xephyr 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
 
after the installation, i issue 
$sudo /scratchbox/sbin/sbox_adduser peter 
and succeed. 
but 
./login 
failed. 
later i am told a logout and login again is required. 
but since i login the whole system as peter 
so i can not logout by simply typing 
$logout 
what i have to do is rebooting the system. 
now, 
./login-----------------done!^_^ 
************** 
and where to go from here, maybe $apt-get update 
see ../ref/installdoc:2.2.1 
Now 2.2.4 is the really important part 
during the several steps of this 
i find out that many tools i needed to setup my target are not 
currently installed, such as the right cross-compilfier 
qemu, and maybe somethind else 
see ../../doc/install_sdk to continue 
you login as user peter 
[sbox-DIABLO_ARMEL: ~] > echo $HOME 
/home/peter 
[sbox-DIABLO_ARMEL: ~] > cd $HOME 
[sbox-DIABLO_ARMEL: ~] > ls 
MyDocs arm-hello hello-world-gtk hello.c 
in ubuntu bash its location is 
/scratchbox/users/peter/scratchbox/users/peter/home/peter 
 
