# add audio track to video

    ffmpeg -i 15.flv -i 12345.mp3 -acodec copy -vcodec copy out.flv

this acutally solved my recordmydesktop problem(video lag behind audio), now I can get the audio from the output of recordmydesktop, like this

    ffmpeg -i out.ogv out.wav

then open out.wav with audacity, add 2 seconds to the beginning of the file
and then export it again, say we now have it named add.wav

    lame add.wav add.mp3

now that 2 empty seconds added to the audio already, that makes the audio is now no faster then the video, so all we need to do is to substitude the orginal audio track in out.ogv, with add.mp3, and this is easy:
    
    ffmpeg -i out.ogv out.flv # no need to remove the original audio track
    ffmpeg -i out.flv -i add.mp3 -acodec copy -vcodec copy final.flv

done
# Capture video of a linux desktop

    $ ffmpeg -f x11grab -s wxga -r 25 -i :0.0 -sameq /tmp/out.mpg

## Get the software

the ffmpeg in ubuntu 9.04 is crap, due to legal reason, it basically support no format

so I need to compile it and install it myself

http://ubuntuforums.org/showthread.php?t=786095

but I did not use all these arguments for =configure=

I just run in =/ffmpeg= 
    

    svn checkout svn://svn.ffmpeg.org/ffmpeg/trunk ffmpeg
    # or  git clone git://git.ffmpeg.org/ffmpeg/
    configure
    make 
    make install
    


then I tried
    

    
    pet@cow:~/Desktop/video$ ffmpeg -i ocw-6.033-32123-14feb2005-220k.mp4 m.mp3
     
    


but **failed**
    

    pet@cow:~/Desktop/video$ ffmpeg -i ocw-6.033-32123-14feb2005-220k.mp4 m.wav
    


again the output is two big (423M), so I 
    

    pet@cow:~/Desktop/video$ lame m.wav 
    


then I got a	file named m.wav.mp3, small and nice

and I can also do this for [[kino]]
    

    pet@cow:~/Desktop/video$ ffmpeg -i out.flv.dv out.avi
    


## 7-zip
    

    peter@cow:~$ sudo apt-get install p7zip
    


## test
    

     ffmpeg -i rsync.ogg rsync.avi
    

this works, [[youku]] does not accept ogg, now I have avi, that means I can
publish all my lectures to youku now.

    

    ffmpeg -i twilight-1.flv twilight-1.wav
    lame twilight-1.wav twilight-1.mp3
    


and this means I can get nice mp3 form youku videos


video to video
http://howto-pages.org/ffmpeg/#basicvideo

ffmpeg -i kitty.flv -target ntsc-dvd -aspect 4:3 kitty.mpg
 2004  ffmpeg -i out.ogv out.avi
 2007  ffmpeg -i out.ogv out.flv


