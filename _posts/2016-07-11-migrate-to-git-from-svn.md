---
tags:
  - Git
---
####Steps:  
1. 使用git-svn。mac預設就有裝。ubuntu請用 sudo apt-get install git-core git-svn。請打如下的command
`git svn clone http://yourSVNpath --stdlayout  --no-minimize-url  -A ~/authors.txt gitRepoFolderName`

    - 如果你的project有所謂的trunk, tags, branches目錄，請用--stdlayout (其他case請參考https://github.com/nirvdrum/svn2git)，它會把trunk/tags/branches直接都變成git中的branch，亦即git中的repo中沒有trunk, tags, branches這種目錄分層，一個repo底下就是code的根目錄。
    - 如果你的project不是svn repo的root/top level，請使用--no-minimize-url 。
    - 請指定在log轉換中，使用者對應的表。~/authors.txt , 可參考https://github.com/nirvdrum/svn2git中的example。

2. `git remote add [shortname] [url]`

3. `git push origin master`
