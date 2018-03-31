---
title: 'TypeScript的介紹'

tags:
- IDE
- JavaScript
- typescript
- Node.js
- Atom
- VS Code
---

### 參考:
1. [TypeScript的官網](http://www.typescriptlang.org/), e.g. Node.js + TypeScript 的 example: https://github.com/Microsoft/TypeScript-Node-Starter
2. VS Code上的TypeScript說明: https://code.visualstudio.com/docs/languages/typescript.

TypeScript 沒有強制性每個object都有type, 視需要才加，就算沒有加type的它有時候也會自動檢查出一些 型別的錯誤.
TypeScript 一般可以由以下三者任一來設定, 所以有的project會沒有 tsconfig.json設定檔
 1. 只有 tsconfig.json設定檔
 2. 由gulpfile.js來管理
 3. 由webpack來管理

### 套件

在Atom及VS Code上面安裝外掛增強 JavaScript IDE 開發功能 (沒有列linter部份):
https://grimmer.io/atom-vscode-javascript-packages/

安裝TypeScript及其linter:
npm install -g typescript tslint (需先安裝node/npm, 不需安裝eslint)

安裝給純JavaScript用的eslint
npm install -g eslint

Linter方面:

1. VS Code套件: TSLint, ESLint
)
2. Atom套件: Nuclide, linter-tslint, linter-eslint(後兩個可去其設定打開 Fix errors on save !!)
3. 若是TypeScript project, 則在project folder裡建一個tslint.json檔案

```
{
    /* tslint-config-airbnb does not work somehow */
    "extends": ["tslint:latest"]
}
```

4. 若是 Node.js project, 則 follow https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
5. 在 Atom or VS code右下角可以可以點button打開 linter的log.
p.s. 另有套件可以 show linter的error的說明頁

---

### Examples

JavaScript/TypeScript + Express (http framework) example:
repo: https://github.com/Microsoft/vscode-samples
TypeScript folder: ./node-express-typescript
JavaScript folder: ./node-express-javascript

#### 運行TypeScript project的步驟notes:

準備:
`npm install`

改了code, build (主要是把TypeScript compile成nomral JavaScript code, 可順便compile成ES5 JS code, 做到部份Babel的一樣功能):
`npm run compile`

p.s. 有其他設定辦法可以不需要每次都去手動重build. 搜尋 "tsc watch", 不過要新增一下 TypeScript的 tsconfig.json檔案.

launch + breakpoint debug:
1. 用mouse 設breakpoint
2. 按左邊的debug button, trigger預設debug行為
3. 開網頁打 http://localhost:3000/
