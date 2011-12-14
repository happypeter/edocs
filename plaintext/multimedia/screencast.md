## ubuntu key display
key-mon - Project Hosting on Google Code

screenkey does not work on 9.10

but one 10.04, you just need to install python-xlib, and then download
screenkey deb and then install it, it works.

## ogv -> mov

now I can record video on ubuntu as ogv files, then cp them to mac,
VLC to play them and screenflow to record them into mov. 
Sounds dirty, but works really nice


## screencast spec

Keycastr font and color: same as dereck vim

Terminal font: Menlio Regular 36pt

Terminal: hide dock and menubar of course

Terminal Color: Use Black on White, since it is more presentation and print
friendly.


Software: use Screenflow to do the editing, 
DONOT: add episode title and author at the beginning, like "Vim Basics ep1--with happypeter". 

DO: at the end we add "happypeter.org", and before the text, right-click and
add a transaction "Dip to black"

Export at 75% 

screenflow cut:

click on the time bar to set the point, now `i` to make it a IN point, than
click another point, and `o` to make it as OUT. Now, `ctrl+delete` works like
charm

## how do I produce interviews?
1. take the video with my sony DV.
2. record on my mac again with ScreenFlow
3. when trying to export the file, I do neet to set the quality from high(by
   default) to medium. The final looks are the same, but the size:

    $ du -sh su*
    114M su-high.mov
    29M su.mov

