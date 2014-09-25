-  http://www.macworld.com/article/2107780/change-your-short-username-in-os-x-10-9-mavericks.html

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
