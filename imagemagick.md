### image sharpener
- https://picwish.com/ai-image-sharpener
  - this worked for me
- https://www.aiseesoft.com/watermark-remover-online/#
## image org

- main repo https://github.com/happypeter/images e.g https://happypeter.github.io/images/2015012507.jpg
- every project keeping its own imgs is now encouraged, since my future projects are mustly just books that won't go too big in size
- img.haoqicat.com is obsoleted, since maintaining a https web server is a pain

# railscast #374

```
brew install ImageMagick
```

### covert a full-color img into a gray thumbnail

    convert  peter.jpeg -resize '70x70^' -gravity center -crop '70x70+0+0' -quantize GRAY -colors 256 -contrast source.png

# convert

    convert image.jpg image.png
    convert input.jpg -resize 50% output.jpg
    convert input.jpg -resize 200x200 output.jpg

## create a red img

    convert -size 70x70 xc:red pp.png

# get info like image-size and stuff

    identify -verbose ruby-china.png
    identify ruby-china.png

# random

    convert -size 32x32 xc:red xc:green xc:blue +append stripes.gif
    convert -size 32x32 xc:red xc:#abc xc:teal xc:#27ae60 +append stripes.gif
    convert  color.png  -quantize GRAY -colors 256  grey.png

# 把 6M 的 png 图变成 30k 的 jpg

```
convert origin.png step1.jpg
# 除非透明背景，不然就不要用 png ，这不，直接无损转换，png 是 6M ，jpg 就是 1M 了
convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% step1.jpg step2.jpg
# 质量保留 85% ，1M 变 464K
convert step2.jpg -resize '428x283' step3.jpg
# 把尺寸从 2140x1416 变成 428x283 的，464k 就变成 37K 了
```


## 压缩 png

可以考虑直接用 convert 命令压缩，效果很不错，也可以考虑用下面的脚本压缩。

gulpfile.js

```js
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')

gulp.task('imagemin', function() {
  return gulp
    .src('src/img/*')
    .pipe(
      imagemin({
        use: [pngquant()]
      })
    )
    .pipe(gulp.dest('dist/img'))
})

gulp.task('default', ['imagemin'])
```
