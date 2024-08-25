## change my Macbook Pro battary
  - A1398 is my model, merchant needs this to tell the battary model
    - 248RMB on PDD
  - follow this MAYBE: https://www.youtube.com/watch?v=AabLlHT503o&list=WL&index=1&t=1236s
    - many people leave comments down below to say the steps in the video are redundant, just removing the speaker or remove nothing at all will still work, just a bit dangerous for the components around the battary, since the glue remover will disrolve plastics.
    - my plan is to have a first try, remove the battary without glue remover
    - easyway to do it https://www.youtube.com/watch?v=LEQXU1lryIY
      - why the hard way tear the whole computer off is because the guy needed to remove the speakers first. But actually it is not necessary.

- ipad
  - ipad2, intall compatible versions 
    - https://www.youtube.com/watch?v=033Ck_N9WF8
## Airport

I can not find hello-peter, I can not connect

the fix:

      rm ~/Library/Preferences/com.apple.systempreferences.plist 

and reboot Airport.

when things are back to normal, I did a test

```
system preference -> networking 
```

and now I see Airport on top of ethernet and firewire with a green light, but when I click a "connect" button after "wap:hello-peter", I see Airport went to the bottom a light turned yellow. Now I can not find hello-peter, and I can not connect again. Lucily it was the same issue, and the fix is the same too.

Edit: move the "Airport" on top of ethernet and firewire works for me(sys preference->network). I actully deleted "ethernet" and "firewire" here, since I don't need them. Now I still lose connection, but it is easy to reconnect.

## name change

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

## sogou

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

## upgrading to 10.10 Yosemide

when done, pop up "You need Java RunTime Environment to run this web content"

but you should not install jre-xxx but rather jdk-xxx

http://www.macworld.com/article/2107780/change-your-short-username-in-os-x-10-9-mavericks.html

  If Automatic Login is enabled (in Users & Groups preferences) for the account
  you’re modifying, disable it. You can re-enable Automatic Login, if desired,
  after completing the procedure. (Note that in older versions of OS X, it was
  also necessary to disable FileVault. However, that's no longer necessary in OS
  X 10.7 Lion or later.)


  Log in as a different user than the one you want to modify; also, make sure
  the account you want to modify is not logged in.
  Open the Users & Groups pane of System Preferences.

  If the lock icon in the lower-left corner of the Users & Groups window is
  “locked,” click it and provide an administrative username and password when
  prompted. This allows you to make changes.
  
  In the list of accounts on the left, right-click (or Control-click) on the
  name of the account you want to modify, and then choose Advanced Options from
  the resulting menu.


  On the Advanced screen, delete your current short username in the Account Name
  field, and then type your desired new short username.
  
  
  In the Home Directory field, change /Users/oldusername to /Users/newusername,
  where oldusername is your original short username and newusername is your new
  short username. Make note of the original and new paths.
  
  Click OK, and then close System Preferences.
  
  Open Terminal (in /Applications/Utilities).
  
  Type the following command, all on one line, and then press Return; when
  prompted, provide the password of the admin-level account you’re currently
  using, and then press Return again: sudo mv /Users/oldusername
  /Users/newusername (These are the original and new Home Directory paths from
  Step 7; oldusername is your original short username and newusername is your
  new short username.) This step renames your home folder in the Finder.
  Quit Terminal, and then restart your Mac.

- 需要把这个临时用户 billie66 添加为 sudoer 才行
  http://osxdaily.com/2014/02/06/add-user-sudoers-file-mac/

- Mac 10.8.5 我的 macbook 上操作成功。使用了一下，没有太大问题。
  - VirtualBox 的 VM 都找不着了，重新 Add 一下就好了。
  - Sougo 拼音，也有了问题，卸载，清空一下配置，重装就好了。
  - time-machine 也不行了，我干脆把他 turn off 了

## LG 显示器之后

通过 HDMI 连上 

没有声音，解决方法 https://discussions.apple.com/thread/6608078?start=0&tstart=0
System Preferences> Sound>Output(Tab)> and selected the "internal speakers" as it was defaulted to my external HDMI.

## iMac 链接另一个显示器

https://www.youtube.com/watch?v=MXDbvXhBpJg
How to Make a Dual Monitor Setup on a Mac

## 合上盖子，外置屏幕休眠

解决方案：笔记本连上外置电源就不休眠了。

### 匹配无线键盘

https://support.apple.com/zh-cn/HT201178

如果您使用的是 Mac 笔记本电脑，请使用有线鼠标或触控板，或使用内建触控板，然后按照以下步骤设置早期的 Apple 无线设备（如 Apple Wireless Keyboard 键盘、Magic Mouse 鼠标和 Magic Trackpad 触控板）：
确保设备已开启。

如果 LED 指示灯不停闪烁，则表示设备处于可被发现模式。如果 LED 指示灯持续点亮，则表示设备已与其他物件配对。请取消设备配对，将其关闭，然后再重新启动。

在 Mac 的菜单栏中，选取蓝牙图标，然后选取“打开蓝牙偏好设置”。
Mac 会扫描可用的蓝牙设备。

当设备出现在“蓝牙偏好设置”面板中时，点按“配对”。
