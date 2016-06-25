--
--
用來測試的: http://es6console.com/


---


spread operator: `...`, 展開東西  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator (只講解es6的)  
es6: array展開. e.g. array object展開成arguments丟進function
  or `c=[...a]`  
es7: object類. `c= {...a, ...b}` 

---
rest operator:`...`, 變成一個,  for destructuring arrays and objects  
es6 rest parameters:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

```javascript
function fun1(...theArgs) {
  console.log(theArgs.length);
}
```
---
Destructuring_assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment  
Array destructuring  
`[a, b, ...rest] = [1, 2, 3, 4, 5];` 是Rest operator, es6

Object destructuring  `c = {a:1, b:2};`

```javascript
{a, b} = c
```
or

```javascript
({a, b} = {a:1, b:2})
```

---

**其他:**  
var c= {a,b} -> es6
