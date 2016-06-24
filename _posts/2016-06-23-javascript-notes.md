---
---

### Notes:


1. everything is object, function also.
2. scope (es5: function scope, es6: let->block scope)
3. this, call, apply -> closure
4. 全域變數其實就是全域物件的屬性。瀏覽器：window物件、node.js：GLOBAL物件)
   例外：在使用node.js時，若使用node file.js這樣的方式執行js檔，並不會讓宣告的全域變數掛在全域物件上(意指會利用function將code整個包起來執行)，故輸出應為undefined。
5. 可以直接印 console('test:', testobj)

---

## Good references:

### ES5
[http://www.w3schools.com/js/js_arrays.asp](http://www.w3schools.com/js/js_arrays.asp)  
JavaScript does not support arrays with named indexes.
->可能會誤解, 至少 JavaScript Object 就看起來等於是named indexed了. [http://www.vixual.net/blog/archives/31](http://www.vixual.net/blog/archives/31)

JavaScript教學 - 變數(Variables)
[http://emn178.pixnet.net/blog/post/94806770-javascript%E6%95%99%E5%AD%B8---%E8%AE%8A%E6%95%B8(variables)](http://emn178.pixnet.net/blog/post/94806770-javascript%E6%95%99%E5%AD%B8---%E8%AE%8A%E6%95%B8(variables))

How do you check if a variable is an array in JavaScript?
[http://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript](http://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript)

How to check for “undefined” in JavaScript? [duplicate]
[http://stackoverflow.com/questions/3390396/how-to-check-for-undefined-in-javascript](http://stackoverflow.com/questions/3390396/how-to-check-for-undefined-in-javascript)  
if (aa.bb) ->bb is undefined , will not throw exceptions
but  
if (aa) ->aa is undefined, will throw exceptions.

JavaScript Hoisting, JavaScript Declarations are Hoisted, 先使用之後才var
[http://www.w3schools.com/js/js_hoisting.asp](http://www.w3schools.com/js/js_hoisting.asp)

[轉載]你所想像不到的 JavaScript  
[http://www.vixual.net/blog/archives/31](http://www.vixual.net/blog/archives/31)

**module pattern**  
[https://carldanley.com/js-module-pattern/](https://carldanley.com/js-module-pattern/) 

about multi thread:  

1. [http://caramels.pixnet.net/blog/post/26575018-javascript-%E6%98%AF%E5%90%A6%E7%82%BA%E5%A4%9A%E5%9F%B7%E8%A1%8C%E7%B7%92(multi-thread)-%3F](http://caramels.pixnet.net/blog/post/26575018-javascript-%E6%98%AF%E5%90%A6%E7%82%BA%E5%A4%9A%E5%9F%B7%E8%A1%8C%E7%B7%92(multi-thread)-%3F)  
2. [https://www.ptt.cc/bbs/Ajax/M.1320492552.A.2F1.html](https://www.ptt.cc/bbs/Ajax/M.1320492552.A.2F1.html)

JavaScript 物件導向介紹  
[https://developer.mozilla.org/zh-TW/docs/JavaScript_%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E4%BB%8B%E7%B4%B9](https://developer.mozilla.org/zh-TW/docs/JavaScript_%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E4%BB%8B%E7%B4%B9)

物件的使用:  

1. [https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Working_with_Objects](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Working_with_Objects)  
2. 
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

物件(es5)的member function (method)宣告方式:
  
1. non static method: `Person.prototype.sayHello = function()`  
2. in constructor:   

    function Person (){    
	    this.testFun = function{  
	    }
    }
3.  key/value:  

    var myObj = {
  	  myMethod: function(params) {
    	  // ...do something
  	  }
    }
4. static: `Class.method = function ()`. It  has no relationship with an object instance of that constructor function  
[http://ithelp.ithome.com.tw/question/10128721](http://ithelp.ithome.com.tw/question/10128721)


function expressions/Function declaration:  

1.  
定義 JavaScript 函數（Functions）的各種方式 (非指member function)
[http://blogger.gtwang.org/2014/04/defining-javascript-functions.html](http://blogger.gtwang.org/2014/04/defining-javascript-functions.html)  
2.  
[http://stackoverflow.com/questions/16439949/define-local-function-in-javascript-use-var-or-not](http://stackoverflow.com/questions/16439949/define-local-function-in-javascript-use-var-or-not)
3. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
 Thus, unlike those defined by function expressions, functions defined by function declarations can be accessed by their name in the scope they were defined in:

es5 singleton  
[http://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-singleton-in-javascript/1479341#1479341](http://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-singleton-in-javascript/1479341#1479341)

簡單理解 JavaScript 的記憶體管理機制  
[http://fred-zone.blogspot.tw/2012/05/javascript_22.html](http://fred-zone.blogspot.tw/2012/05/javascript_22.html)

**JavaScript Scope**  
[http://www.w3schools.com/js/js_scope.asp](http://www.w3schools.com/js/js_scope.asp)

**scope, 變數範圍, 有提前講到 es6的let (block scope)** 
[https://msdn.microsoft.com/zh-tw/library/bzt2dkta(v=vs.94).aspx](https://msdn.microsoft.com/zh-tw/library/bzt2dkta(v=vs.94).aspx)

**this**  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

**call:**  

1.  JavaScript 物件導向介紹
[https://developer.mozilla.org/zh-TW/docs/JavaScript_%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E4%BB%8B%E7%B4%B9](https://developer.mozilla.org/zh-TW/docs/JavaScript_%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91%E4%BB%8B%E7%B4%B9)
2.   
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

this, bind  

1. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
2. 理解 Javascript 的 Function.prototype.bind
[http://andyyou.logdown.com/posts/233010-understanding-javascript-functionprototypebind](http://andyyou.logdown.com/posts/233010-understanding-javascript-functionprototypebind)

this, strict mode
[https://dotblogs.com.tw/blackie1019/archive/2013/08/30/115977.aspx](https://dotblogs.com.tw/blackie1019/archive/2013/08/30/115977.aspx)

**this, JavaScript Function Invocation**
[http://www.w3schools.com/js/js_function_invocation.asp](http://www.w3schools.com/js/js_function_invocation.asp)

this, Javascript 的 `this` 是指什麼?
[http://dreamerslab.com/blog/tw/javascript-this/](http://dreamerslab.com/blog/tw/javascript-this/)

**this, Javascript：this用法整理, 超重要**  
[http://crazyalu-blog.logdown.com/posts/209938--javascriptthis-use-finishing](http://crazyalu-blog.logdown.com/posts/209938--javascriptthis-use-finishing)

**closure:**

1. [http://www.w3schools.com/js/js_function_closures.asp](http://www.w3schools.com/js/js_function_closures.asp)  
*A closure is a function having access to the parent scope, even after the parent function has closed.*

2. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  !!!!
3. [http://dreamerslab.com/blog/tw/javascript-function-scopes-and-closures/](http://dreamerslab.com/blog/tw/javascript-function-scopes-and-closures/) !!
4. [http://openhome.cc/Gossip/JavaScript/Closure.html](http://openhome.cc/Gossip/JavaScript/Closure.html)
5. [http://ithelp.ithome.com.tw/articles/10131469](http://ithelp.ithome.com.tw/articles/10131469) **timer !!! 特殊的case2 !!! 可用es6的let解**
6. [http://cythilya.blogspot.tw/2015/06/javascript-module-pattern.html](http://cythilya.blogspot.tw/2015/06/javascript-module-pattern.html)

--

### ES6 


es6, classes  
[http://www.codedata.com.tw/javascript/es6-4-maximally-minimal-classes/](http://www.codedata.com.tw/javascript/es6-4-maximally-minimal-classes/)

es6, Arrow function  
[https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

ES6 Preview  
[http://weichienhung.github.io/blog/2014/03/12/es6-preview/](http://weichienhung.github.io/blog/2014/03/12/es6-preview/)

* arrows
* classes
* template strings
* destructuring
* default + rest + spread
* let + const
* iterators + for..of mmm
* modules
* module loaders
* promises

es6 features
[https://github.com/lukehoban/es6features](https://github.com/lukehoban/es6features)

es6 簡化的member function寫法  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)

```
class MainPage extends React.Component {

  handleChange() {
  }
}
```
---

### ES7


es7 (draft)  
[http://stackoverflow.com/questions/32540181/should-i-put-a-semicolon-after-es7-decorators](http://stackoverflow.com/questions/32540181/should-i-put-a-semicolon-after-es7-decorators)

es7, spreading operator (not [...]->already in es6):
`{...a, ...b}`

---

**test code 1:**

```
    if(true)
    {

      var testlocal = "123";  
    }
```  
接著印 testlocal 有值

**test code 2:**

```
function func2() {   
    var L = 'local';  
    G = 'global';  
}
```
沒有call的話都沒值
但如果有call func2
則G有值!!!!!! ->會變成global object下面的property

---
### 其他

**特殊 case :**  

```
var a = 1;

(function(){
  console.log(a);    //  ? -> undefined

  var a = 100;
  console.log(a);    // 100

})();
```

因為在匿名函數獨立的 scope 內，不管 var 是放在最前面，或是最後一行，他的變數實體在該 code block 一開始就是新的了，也就是說，剛剛的 code 其實等同下面這段：

```
(function(){
  var a;
  console.log(a);  
  ..
})();
```

**Node.js bug:**  
Why does the value of typeof null change inside a loop? V8 engine bug.
[http://stackoverflow.com/questions/37939455/why-does-the-value-of-typeof-null-change-inside-a-loop](http://stackoverflow.com/questions/37939455/why-does-the-value-of-typeof-null-change-inside-a-loop)
