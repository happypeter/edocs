# add audio track to video

    ffmpeg -i 15.flv -i 12345.mp3 -acodec copy -vcodec copy out.flv

    ffmpeg -i out.ogv out.flv # no need to remove the original audio track
    ffmpeg -i out.flv -i add.mp3 -acodec copy -vcodec copy final.flv

# Capture video of a linux desktop

    $ ffmpeg -f x11grab -s wxga -r 25 -i :0.0 -sameq /tmp/out.mpg
