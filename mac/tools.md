# http://www.iterm2.com/#/section/documentation

the full-screen button actually works
then install http://ethanschoonover.com/solarized 
now Cmd+, to bring out preference -> window -> style(full screen)
in full screen mode, default behavior is press Cmd for 1 second bring out the tab, right+left arrow to switch among them




# Airport
I can not find hello-peter, I can not connect
the fix:

    rm ~/Library/Preferences/com.apple.systempreferences.plist 

and reboot Airport.

when things are back to normal, I did a test

system preference -> networking 

and now I see Airport on top of ethernet and firewire with a green light, but when I click a
"connect" button after "wap:hello-peter", I see Airport went to the bottom a light turned yellow.
Now I can not find hello-peter, and I can not connect again. Lucily it was the same issue, and the fix 
is the same too.

Edit: move the "Airport" on top of ethernet and firewire works for me(sys preference->network). I actully deleted "ethernet" and "firewire" here, since I don't need them. Now I still lose connection, but it is easy to reconnect.

### name change

in system preference -> accuont

I change: wang peter -> Peter

after reboot, I can not find my wifi connection: happpeter.

change the name right back fix this.


## wget 

prereqest is to install xcode

    # https://github.com/mxcl/homebrew/wiki/installation
    brew install wget # no sudo
    # also works for tig markdown mplayer


## KeyCastr

Be sure to enable access for assistive devices in the Universal Access pane of System Preferences.

# termial

uncheck `secure keyboard entry`

to hide the menu bar:

http://www.mactrickosandtips.com/2009/07/hide-the-menubar-or-dock-in-specific-apps.html

steps:

    sudo vim ~/Desktop/Terminal.app/Contents/Info.plist

and add the following shit after `<dict>` near the top

	<key>LSUIPresentationMode</key>
	<integer>4</integer>
## theme

Snow Leopard Terminal Colors
ref: http://www.emersonlackey.com/article/terminal-colors-snow-leopard
Step 1. Install SIMBL 
need to create `~/Library/Application Support/SIMBL/Plugins/` by hand

Step 2. Install the Visor Bundle
ref: http://visor.binaryage.com/#source

    git clone git://github.com/darwin/visor.git
    cd visor
    rake
    rake install


Step 3. Install the TerminalColors-SL Bundle

just put it into the `~/Library/Application Support/SIMBL/Plugins/`, like visor

Step 4. Install the IR_Blank.terminal Theme

double click to install, them you can find the theme in Terminal->Preference

Step 5. set it as default and custom

everything can be done with GUI

Text: grey on not so black
Cursor: block, use some color between black and grey(iron)
Selection: use color between grey and white(mercury: with %60 opacity)

Visor: use Ctrl-Ctrl to tangle the window

also the same theme for vim here: http://blog.toddwerth.com/entries/8

go to text->more, if you think your green color is still less then textmate's green

need to choose a nice green, since tig and my xxx use it a lot

export the theme if you want


##screenflow
macx.cn

## misc
### zoom in and out the screen

OPtion+Cmd+8    on or off
OPtion+Cmd+-    zoom in
option+Cmd+=    zoom out
Ctrl+two_fingers_on_trackpad   expand part of the screen

### switch among buttons
by defualt, you can not do this using <tab>, which seems really buggy
to enable this, use Ctrl-F7, OR:

    system preference->keyboard

and then select `all controls`

you need to use SPACE rather than ENter to click the button

### firefox
Cmd+arrowleft
Cmd+R

### sogou
1、如何启动搜狗输入法 for Mac？
请打开系统偏好设置，选择“语言与文本”，点击“输入源”标签，在输入法列表中找到并勾选“搜狗输入法”。

2、如何快捷切换至搜狗输入法？
请打开系统偏好设置中“语言与文本”->“输入源”->“快捷键”->“键盘与文本输入”->“选择前一个输入源”或者“选择输入法菜单中的下一个输入源”，可以设置输入法的快捷切换键。

3、如何切换中英文？
在使用搜狗输入法进行输入时，按“Shift键”即可进行中英文切换。

4、如何切换中英文标点？
在使用搜狗输入法进行输入时，可以通过快捷键“Control+.”进行中英文标点切换。

### hide dock

command+option+d



apple ID: happypeter1983    PW:111111


