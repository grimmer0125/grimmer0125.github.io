---
tags:
  - Git
---
way1 [http://oomusou.io/phpstorm/phpstorm-git-rm-idea/](http://oomusou.io/phpstorm/phpstorm-git-rm-idea/):

選擇要移除的.idea目錄諸檔，Actions -> Stop Tracking。
其實這就相當於git rm --cached -r .idea。

way2: [https://blog.hsdn.net/1624.html](https://blog.hsdn.net/1624.html)
但是一旦使用stop tracking，那麼git中的這些檔案就會被刪除。但是一旦使用stop tracking，那麼git中的這些檔案就會被刪除。

如果要將這些特定的檔案進行本地端地忽略，那麼只要使用下面的指令就可以

    git update-index --assume-unchanged 要忽略的檔名

這樣就可以達到我們的需求了，如果開發團隊中每個都需要忽略本地端相同的檔案，那麼可以把上面的指令寫成一個檔案，這樣大家一來也可以把本地要忽略的檔案進行管理。另外記得這個檔案要透過.htaccess的方式來進行讀取的限制，免得讓大家都發現這個意外的驚喜。
