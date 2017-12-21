

## screenflow

- 插入当前 frame
  - 选中 clip
  - shift+cmd+f
- split 当前 clip
  - 鼠标点一下，选中当前 clip
  - scrubber 放到需要 split 的位置
  - T 即可

screenflow cut:

click on the time bar to set the point, now `i` to make it a IN point, than
click another point, and `o` to make it as OUT. Now, `ctrl+delete` works like
charm

you can also export part of the video by selecting this way

## how do I produce interviews?
1. take the video with my sony DV.
2. record on my mac again with ScreenFlow
3. when trying to export the file, I do neet to set the quality from high(by
   default) to medium. The final quality are almost the same(the 'least' one
   is not for 1024x768, but the 'low' one is still good enough), but the size(a 1024x768
   02:20 mov)

      $ du -sh su*
      114M    su-high.mov
      12M     su-least.mov
      14M     su-low.mov
      29M     su-medium.mov




## screenflow tips

1. crop the virtualbox screen
   first set the croparea to 1024x768, then select the video, and drap it to
   fit into the 1024x768 area.
   Stop finding each four boundary by hand !

1. join two pieces of video into one
   if two video pieces are both exactly 1024x768, then join them into one is
   very easy, just import them into screenflow, then each of them is placed at
   exactly the center of the whole area, they take the same square area, and
   share the same blank area.
   Now get ride of the blank area is easy like hell, just click the "resize
   canvas area" button, set the size to 1024x768, click "apply", and it's
   done!
