now I have all these _.flv_ videos from youtube and youku, but my andirod phone can only play mp4, so I want to convert flv to mp4, and _ffmpeg_ helps.

## install 
one headache for me is ffmpeg changes a lot everytime I install it.

I just know I will never trust ubuntu repo for this again.

this time(12/09/10 17:03:00), I get to their site <http://ffmpeg.org/>

    529  git clone git://git.ffmpeg.org/ffmpeg/
    530  cd ffmpeg
    531  git clone git://git.ffmpeg.org/libswscale/

done well, but have to use 

    541  ./configure --disable-yasm 

it is obviously I do not have stuff for `yasm`.

    542  make
    544  sudo make install

but this worked for me:

    555  ffmpeg -i FlashqX5Thv xx.mp4

while `FlashqX5Thv` is from _youtube_

some mp4 videos obtained this way can not be played on me501, but others works
even though I saw some errors during the format conversion.

