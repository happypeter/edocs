## video format

choose __STD__ rather then __HD__ 

then I get xxx.mpg files, and I can play them in ubuntu.

I used __HD__, then I got xxx.MTS files, the format is not friendly to linux

now you get a `big.mpg`, then

    ffmpeg -i big.mpg  -s 320x240 big.mp4

works nice, size 29M -> 1.1M

but

    ffmpeg -i big.mpg  -s 720x576 big.mp4

looks bad, even though the output size is 3M


but for `xxx.MTS`, (those you get when you capture video with __HD__)
this works best, but still not really satisfying:

    ffmpeg -i big.MTS  -s 1024x768 big.mp4

### solution

so the right way is:

always set __STD__ for the DV, and then

    ffmpeg -i big.mpg  -s 320x240 big.mp4
## IE compatibility

so I need to change my screencasts taken on my labtop (`.ogv`) files into
mp4 format as well:

    ffmpeg -i big.ogv big.mp4 # don't use `-s 320x240`

tested the output with IE and firefox, all works. though the MP4s are not as
good as original OGVs
