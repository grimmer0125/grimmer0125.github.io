---
title: '在Atom及VS Code上面的JavaScript IDE 功能加強'

tags:
- IDE
- JavaScript
- Atom
- VS Code
---

## symbol (function, global variable) list

### Atom - JavaScript
- 需安裝 [nuclide](https://atom.io/packages/nuclide), toggle outline功能
- 可裝不可裝 [ide-typescript](https://github.com/atom/ide-typescript), 強化nuclide, 對JS也有效

### Atom - TypeScript
需安裝以下兩個
1. [nuclide](https://atom.io/packages/nuclide)
2. [ide-typescript](https://github.com/atom/ide-typescript) 把nuclide-outline加上 TypeScript support

### VS Code - TypeScript & JavaScript
[vscode-code-outline](https://marketplace.visualstudio.com/items?itemName=patrys.vscode-code-outline)

## Refactor (Rename)

### Atom - TypesSript only
[atom-typescript](https://atom.io/packages/atom-typescript), 按f2 (有時不work)

### VS Code - TypeScript & JavaScript
內建 (有時不work, TypeScript work機率高點?)

## IDE - find definition

### Atom - TypeScript & JavaScript
以下任一種
1. [goto-definition](https://atom.io/packages/goto-definition)
2. [nuclide-jump-to-definition](https://nuclide.io/docs/languages/flow/#features__jump-to-definition):
cmd+mouse click. 推薦這個
3. [atom-ternjs](https://atom.io/packages/atom-ternjs): ctrl+shift+r; JavaScript only

### VS Code - TypeScript & JavaScript
內建

## find references/usages (跨檔案好像都不work?)

### Atom - TypeScript & JavaScript
[ide-typescript](https://github.com/atom/ide-typescript) 對JS也有效

### VS Code - TypeScript & JavaScript
內建

## autocomplete (自動完成)/ Intelligence

### Atom
1. [atom-ternjs](https://atom.io/packages/atom-ternjs): JavaScript only, function名稱, object property. **function parameters 有時也會show(但不常)**
2. [ide-typescript](https://github.com/atom/ide-typescript): TypeScript & JavaScript, function parameters及其type.
3. [atom-typescript](https://atom.io/packages/atom-typescript) TypeScript only, 有即時show type alias的每個property type, e.g. const bbb:test = {**此時有提示property怎麼填**}

### VS Code - TypeScript & JavaScript
內建: function名稱, object property, **function parameters**, TypeScript type alias & TypeScript function parameter type
