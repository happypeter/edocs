my big headache now is that its so painful to make a screencast
since recordmydesktop fails to record audio for me, it is seems that
I need to config jack for it first.

the alternative is that I start a audio recorder and recordmydesktop 
syncly and merge the obtained vedio and audio tracks with ogmtools
but audacity has no commandline interface, bad bad bad!

http://ubuntustudio.org/

## recordmydesktop
useful command

	$ recordmydesktop --no-sound -width 720 -height 576

the sound works after I do:

	sudo apt-get install ardour

it make sense, since I see jack shows up several times during the installation
anyway it works on my ubuntu910+black dell	

but the error "Broken pipe: Overrun occurred." shows up all the time
some times it does not matter but some times it kills my audio. what to do?

it seems that if you do not type in stuff on the term tap you started recordmydesktop, the audio will be safe.

this might works 

    http://odo.lv/Recipes/RecordmydesktopFix_en

but two cumbersome

so I will use

	billie@billie-laptop:~$ cat /bin/rrr
	recordmydesktop 2>/dev/null &
	billie@billie-laptop:~$ cat /bin/rrr-stop 
	killall recordmydesktop
	billie@billie-laptop:~$ 

work!

now on ubuntu10.04, recordmydesktop works only after *ardour* is installed.
but much slower than on 9.10

but in 9.04, all you need to do is to install recordmydesktop
and ardour, things are done neatly, you do not need to config jackd yourself.

I can use

	totem out.ogv 

to open the video

and I can config s gnome shortcut to run the command 

	killall recordmydesktop 

to stop and save.

## compress ogv file
now the problem is the output ogv file is too big

I tried http://manpages.ubuntu.com/manpages/intrepid/man1/recordmydesktop.1.html

	peter@bull:~$ recordmydesktop  -freq 4 -fps 1 -o sim.ogv

but did not make it much smaller.

## voice gone on 9.10

and I see this

    peter@vostro:~$ audacity 
    bt_audio_service_open: connect() failed: Connection refused (111)


the fix is simply this:

    peter@vostro:~$ sudo dpkg --purge bluez-alsa


