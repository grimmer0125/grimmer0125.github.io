---
title: 'Notes about new feature, async & await on .NET 4.5 '

tags:
- C Sharp
---

新的.NET 4.5的await/async的東西。如果不加await，function會被執行(如果是 xxAsync的function就會在背景做它的事, 然後程式會馬上可以走到下一行) , 但是無法知道它成功與否或是return值。Example:

```cs
    Task<string> getStringTask = client.GetStringAsync("http://msdn.microsoft.com");

    // You can do work here that doesn't rely on the string from GetStringAsync.
    DoIndependentWork();

    string urlContents = await getStringTask;

    int x =5;  
```

上面的可以合寫成一句 `string urlContents = await client.GetStringAsync("http://msdn.microsoft.com");``
await的意義就是

1. 取回task完成後的return 值.
2. 遇到await會block在那邊. 程式會馬上返回，亦即若是有個`function X`包含上面的code，則等同於X馬上return掉。
3. 使用function X的caller已完成執行後，await本身跟下面的code `int x =5` 會跳回去被執行. 預設使用同一Thread執行。

--

Notes:

1. 若要解決同一thread的資源問題.  可以用 await Task.run(…) background thread
2. `function X`需要加async，因為它內部有用到 `string urlContents = await getStringTask; `
3. 如果`function X`沒有return值，即`async void type`，使用`function X`時不需`await function X`.

--

參考:
1. 使用 Async 和 Await 設計非同步程式 (C# 和 Visual Basic)
http://msdn.microsoft.com/zh-tw/library/hh191443.ASPX#BKMK_AsyncandAwait

2. async (C# Reference)
http://msdn.microsoft.com/zh-tw/library/hh156513.ASPX

3. 非同步方法的傳回類型 (C# and Visual Basic)
http://msdn.microsoft.com/zh-tw/library/hh524395.ASPX
