Git 是個比svn更適合拿來當多人一起開發時的版本控管的工具，以下是一開始使用時的初步設定注意事項。

Git server主要有兩種帳號管理，一種是ssh/Linux的帳號，一種是用key pair的方式，主流的是後者。
用key pair的步驟是: 

1. 決定你的帳號名, e.g grimmer，通知git server管理者做設定. 

2.a 在mac/linux下，請打
ssh-keygen -t rsa (建議不要讓通行碼passphrase留空) ，請把產生出來的keypair的兩個檔案: xx, xx.pub ，改成你的帳號 及你的帳號.pub，例如grimmer 及grimmer.pub。
接著上傳給git server管理者/管理頁面. 

2.b. 在win上，請使用 puttygen 選擇 ssh2-rsa產生key pair。
http://libai.math.ncu.edu.tw/bcc16/6/putty/puttygen.html ，再依2.a後續步驟。
[updated] 使用puttygen可能會有格式上的問題，較保險的方法是

~~~
下載win上的git console client， msysgit，
http://code.google.com/p/msysgit/
安裝時選擇如附檔的圖，第三選項。
安裝後重開機或重登入後，即可使用如2.a所述的 ssh-keygen 方法。
~~~

3. Git的簡單使用
a. command line的話有Git init (如果是server已建好的repo，不用這步), 
                                     Git clone(~svn checkout), 
                                     Git add(~ svn add), git comit, Git push (把本地端repo的branch push到remote repo)

a.2 在mac/linux上，之前產生的private key一般都是存在home/grimmer/.ssh/下，但如果你使用command line連git有找不到key或問你密碼的情形，可以強制限定某server host對應到某private key

vim .ssh/config，然後加入以下兩行
host 你的git server url
IdentityFile ~/.ssh/grimmer  (改成你自己的private key)

a.3 如果還是發生a.2的問題，可以把private key的權限改嚴一點。 chmod 400 privatekey

b. GUI client, mac上我建議用免費的 (SourceTree)[https://www.sourcetreeapp.com/] (跨平台的)。
