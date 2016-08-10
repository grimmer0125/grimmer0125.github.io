---
tags:
- GitHub
---
GitHub Pages Notes:

1. GitHub pages分成兩大種, a. User & Organization Pages (使用master branch) b. Project Pages. (使用gh-pages branch) 詳細介紹 https://help.github.com/articles/user-organization-and-project-pages/

2. 若已設定custom domain for user/organization pages (e.g. aa.example.com) , 則 Project Pages site 的domain會自動變成 aa.example.com//projectname, 參考
https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/. *If no custom domain is used, the Project Pages sites are served under a subpath of the User Pages site: username.github.io/projectname*

3. 若需要在custom domain上加入 SSL 的功能，可考慮使用 cloudflare CDN. 教學. https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/. 但經實驗在這種組合下，user pages的custom domain用有 subdomain(e.g. www.example.com) 的會有問題, 建議使用 example.com.(指的是是在GitHub repo那邊設定的custom domain, 非指DNS provider端)   


p.s. 除了以上以外, 剩下的GitHub官方設定custom domain的文章都沒有對user/project pages做區分
--

Custom domain on GitHub Pages:

1. Custom domain的官方教學文章:[https://help.github.com/articles/using-a-custom-domain-with-github-pages/](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)

2. 步驟是

    1. 在GitHub的repo的settings裡 設定custom domain. 或是手動 建立一個CNAME file(只能有一行:aa.example.com)在此repo裡 .

    2. 如果是apex (沒有subdomain的, e.g. example.com)的, 在DNS provider那邊設定 aname/alias(這個就沒有講怎麼設定，只有說要去問DNS provider), 沒有提供aname設定, 則退而設定 a record(一定會有的).  細節教學: [https://help.github.com/articles/setting-up-an-apex-domain/](https://help.github.com/articles/setting-up-an-apex-domain/) (設定如下的兩筆的a record, 因為有兩個GitHub ip). `@ -> githubIP`

    3. 如果subdomain的(www.example.com/aa.exaomple.com)，則是設定 cname record, e.g. ` www  -> username.github.io`


 p.s.1. GitHub 是建議設定www.example.com 而不是example.com (apex type)，若真需要設定apex type，則建議同時也設定wwww.(即example.com & www.example.com同時work)

 p.s.2. 若同時support apex跟subdomain type, 則會根據GitHub repo setting裡的custom domain來決定把那一個自動導到那一個. 亦即若在GitHub那邊是設定 example.com, 而DNS provider兩個都有設定, 則打開www.example.com會自動轉址到example.com . ref:[https://help.github.com/articles/setting-up-an-apex-domain-and-www-subdomain/](https://help.github.com/articles/setting-up-an-apex-domain-and-www-subdomain/)
