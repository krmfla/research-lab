# ES6

<br />

## Arrow Functions | 箭頭函式

```javascript
var a = (x) => x + 1;

// var a = function(x) {
//     return x + 1;
// }
```

ES5的寫法

```javascript
var arr = [1, 2, 3, 4, 5];
arr = arr.map(function(value) {
    return value + 1;
};
// arr = [2, 3, 4, 5, 6]
```

ES6的寫法

```javascript
var arr = [1, 2, 3, 4, 5];
arr = arr.map(value => value + 1);
// arr = [2, 3, 4, 5, 6]
```
箭頭函式在只有一個參數時，可以不用寫小括號

<br />

## Let, Const, Block-scoped

<br />

## Object Literal Extension | 物件實字的擴展

```javascript
let myPhone = "HTC";
let obj = { myPhone };
// 意即 let obj = { myPhone: myPhone };
// 意即 let obj = { myPhone: "HTC" };
```

<br />

**Reference**

[ES6] Javascript 開發者必須知道的 10 個新功能

https://medium.com/@peterchang_82818/es6-10-features-javascript-developer-must-know-98b9782bef44
