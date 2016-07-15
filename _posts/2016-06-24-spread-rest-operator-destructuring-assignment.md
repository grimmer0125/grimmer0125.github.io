---
title: 'Spread, Rest and Destructuring assignment in JavaScript'
tags:
- JavaScript
---

spread operator: `...`, 展開東西  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) (只講解ES6的)  
ES6: array展開. e.g. array object展開成arguments丟進function
  or `c=[...a]`  
ES7: object類. `c= {...a, ...b}`

---
rest operator:`...`, 變成一個,  for destructuring arrays and objects  
ES6 rest parameters:
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```javascript
function fun1(...theArgs) {
  console.log(theArgs.length);
}
```
---
Destructuring_assignment
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
Array destructuring  
`[a, b, ...rest] = [1, 2, 3, 4, 5];` 是Rest operator, ES6

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
var c= {a,b} -> ES6

用來測試的: http://ES6console.com/

---
