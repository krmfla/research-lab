## primitive types | 原始型別

 * number
 * string
 * boolean
 * null
 * undefined
 * Symbol (ES6)

<br />

## object types | 物件型別

 * object
 * array

<br />

## `valueOf`

<br />

## `==` 與 `===` 的差異

相對相等、絕對相等

## 型別判定函式

分辨 object、array 及其他型別

```js
function detect(item) {
  if (typeof item === 'object') {
      if (Array.isArray(item)) {
        return 'array';
      } else if (item === null) {
        return 'null';
      } else {
        return 'object';
      }
  } else {
    if (typeof item === 'number' && isNaN(item)) {
        return 'NaN';
    } else {
      return typeof item;
    }
  }
}

//- 物件型別 
var a = [];
var b = {};
//- 原始型別 primitive data type
var c = 1;
var d = 'A';
var e = true;
var f;
var g = null;
var h = Symbol();
var i = NaN;

console.log(detect(a)); // array
console.log(detect(b)); // object
console.log(detect(c)); // number
console.log(detect(d)); // string
console.log(detect(e)); // boolean
console.log(detect(f)); // undefined
console.log(detect(g)); // null
console.log(detect(h)); // symbol
console.log(detect(i)); // NaN
```

https://codepen.io/krmfla/pen/MWYENad
