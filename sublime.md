- 自定义样式
  - 在 sidebar 和文本中都保持很大的垂直间距，仿效 laracasts
    首先安装：https://github.com/thinkpixellab/flatland
    在 settings-user 中放入

      "theme": "Flatland Dark.sublime-theme",
      "translate_tabs_to_spaces": true,
      "line_padding_bottom": 10,
       "line_padding_top": 10,

  - change sidebar font
    - install "theme soda" via package control
    - on linux, go to ~/.config/sublime.../Theme../Soda/
    - change "Soda Light theme"
      add to class: sidebar_lable

         "font-size": 18,

     - but now I have to change the sidebar line-height as well
     - but I failed to change the line-height for sidebar labels
     - 要想让边栏和标签字体都变大，可以把屏幕显示调低：1024x640
       这个会比本来的 1280x800

     - update: sublime3 中，参考
       http://stackoverflow.com/questions/18288870/sublime-text-3-how-to-change-the-font-size-of-the-file-sidebar
       效果是完美的



- add license
  help -> add license




### For MacOS

- snippet
  http://www.granneman.com/webdev/editors/sublime-text/top-features-of-sublime-text/quickly-insert-text-and-code-with-sublime-text-snippets/
  - Tools -> New snippet
  - save as xxx..sublime-snippet
  - in /Users/billie/Library/Application Support/Sublime Text 2/Packages/User

emmet : html&css snippets
        Settting User may have this package ignored, so uncomment that line
sass  : .scss file format support


install package named “Erb" or sth

Key Binding User 中要做下面的设置

```
[
  { "keys": ["ctrl+shift+."], "command": "erb" },
  { "keys": ["shift+tab"], "command": "reindent" , "args": { "single_line": false } }
]
```

reindent use tab( rather than two spaces ), how to fix?
  - set `  "translate_tabs_to_spaces": true ` in Setting User

- http://happycasts.net/episodes/85


Settings User:

```
{
  "color_scheme": "Packages/RailsCasts Colour
Scheme/RailsCastsColorScheme.tmTheme",
  "font_face": "Courier New",
  "font_size": 17.0,
  "line_padding_bottom": 1, # 适当调节一下，有助于中文显示效果
  "line_padding_top": 1,

  "ignored_packages":
  [
    "Vintage"
  ],
  "tab_size": 2,
  "translate_tabs_to_spaces": true
}
```

- wrap text in html tag
  - ctrl-w(macx)
  - delete parent tag: Cmd + '


* multipane
  Alt-Shift-2  open second pane(Alt-Shift-1 go back to one pane mode)
  Ctrl-1 Ctrl-2 to switch among the panes

* edit misc
  Ctrl-/  comment things
  Ctrl-]/[ indent the line
  Ctrl-L select the whole line(to delete or sth)
  Ctrl-enter
  ctrl-shift-. to get erb block, need to install sublimeerb first
  Ctrl-j the line after will be joined, no need to pre select the two lines.

* line
  C-x delete the whole line
  C-Shift-Enter insert line before
  C-Shift-arrow move current line up/down
   { "keys": ["ctrl+alt+a"], "command": "move_to", "args": {"to": "eol", "extend": false} },
  check edit-> line

* select everything inside () [] ""
  Ctrl-Shift-M

* find
  Ctrl-F: find
  Ctrl-Alt-F: find and replace in current file
  Ctrl-Shift-F: in a whole folder
  Enter: find next
  FLOW（for ubuntu): double-click a word -> Ctrl-F -> Enter to find next
* tags
  close a tag: Alt-.
  add parent tag: Alt-shift-w
  add parent tag with line break: Ctrl+Shift+g
  select everything inside a tag: Ctrl-,
  remove a tag: Emmet: remove tag, Ctrl+Shift+;

* auto format code

    peter@goodcat:~/.config/sublime-text-2$ cat Packages/User/Default\
    \(Linux\).sublime-keymap
    [
    { "keys": ["shift+tab"], "command": "reindent" , "args": { "single_line": false } }
    ]

* multi cursor :
  Ctrl-D  a replacement for my vim: /keyword -> cw ->n->.

* search
  Ctrl-I is a bit better than
  Ctrl-F cause you don't need to hide
    the search box by hiting esc, you can just hit Enter with Ctrl-I

  * Command Pannel, really cool, cause it's very hard to remember all these
    shortcuts, with fuzzy search the commands, you can run much more commands.

  * Go to symbols: C-p -> ordc@crt (Then I am in orders#create)

  * sublime package control: 35:00
  * snippnets: tools->snippnets :43:00
  * quote sth with () "" ...
    select the whole string, and hit "
    if you just want to selct one word, you can use C-D
  * advanced open file: you can create parent dir along the way: 1:13:00
    *  super+Alt+n is used by default to create new files, but super(on ubuntu
       is Cmd key on my mac keyboard) is block by vertualbox, so I remap it to
       `Alt-Ctrl-n`
  * sidebar enhancement: open the current file in browser 1:17:00
  * Lint: error checking on save for css, js, ... 1:19:00
  * LiveReload: a chrome extention is needed 1:38:00
  * replacement for `di'` click into the last word in side '' then C-d-del to
    delete the last word, now C-del to delete the others
  * change settings: copy things from `default settings/vendor setting` to
    `user setttings/my own settings` and do the customization here.

* Sublime Text 2 – Useful Shortcuts (Ubuntu)
  https://gist.github.com/Belgand/2856947
  * Ctrl+Shift+K   delete line
  * Ctrl+Shift+Backspace   delete from cursor to start of line
  * Ctrl+KK 从光标处删除至行尾

* add sublime to quick launcher ubuntu:
  vim ~/.local/share/applications/application_name.desktop
  chmod +x


*  Ctrl+L 选择整行（按住-继续选择下行）
    Ctrl+Shift+D 复制光标所在整行，插入在该行之前
    Ctrl+J 合并行（已选择需要合并的多行时）
    Ctrl+KU 改为大写
    Ctrl+KL 改为小写
    Ctrl+D 选词 （按住-继续选择下个相同的字符串）
    Ctrl+M 光标移动至括号内开始或结束的位置
    Ctrl+Shift+M 选择括号内的内容（按住-继续选择父括号）
    Ctrl+/ 注释整行（如已选择内容，同“Ctrl+Shift+/”效果）
    Ctrl+Shift+/ 注释已选择内容
    Ctrl+Z 撤销
    Ctrl+Y 恢复撤销
    Ctrl+M 光标跳至对应的括号
    Alt+. 闭合当前标签
    Ctrl+Shift+A 选择光标位置父标签对儿
    Ctrl+Shift+[ 折叠代码
    Ctrl+Shift+] 展开代码
    Ctrl+KT 折叠属性
    Ctrl+K0 展开所有
    Ctrl+U 软撤销
    Ctrl+T 词互换
    Tab 缩进 自动完成
    Shift+Tab 去除缩进
    Ctrl+Shift+↑ 与上行互换
    Ctrl+Shift+↓ 与下行互换
    Ctrl+K Backspace 从光标处删除至行首
    Ctrl+Enter 光标后插入行
    Ctrl+Shift+Enter 光标前插入行
    Ctrl+F2 设置书签
    F2 下一个书签
    Shift+F2 上一个书签

* column select

    shift+rightmouse

* package controrl
  https://sublime.wbond.net/
  shift-control-p->"install" ->"package name"

* emmet
   http://css-tricks.com/video-screencasts/129-emmet-awesome/?play=true
   div.peter<tab>
   html:5<tab>
   a{item}
   lorem35
   css vendor prefix: -box-shandow<tab>, -transition<tab>
   ctrl+shift+; : remove tags

* install theme on ubuntu
    /home/peter/.config/sublime-text-2/Packages/User/ is the place to put your
  tmTheme files, then you can get it at Preference->Color Theme -> User
  railscasts theme download: http://railscasts.com/about
  you can also install with Package Control, search: railscasts
