---
tags:
  - JavaScript 
  - Front end
---
Redux ref url:

http://redux.js.org/docs/introduction/PriorArt.html

Another important difference from Flux is that Redux assumes you never mutate your data. You can use plain objects and arrays for your state just fine, but mutating them inside the reducers is strongly discouraged. You should always return a new object, which is easy with the object spread operator proposal, or with a library like Immutable.
