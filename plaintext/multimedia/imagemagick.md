# railscast #374

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

