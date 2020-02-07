# Object.defineProperty

直接對一個物件定義、或是修改現有的屬性。執行後會回傳定義完的物件

這個方法會直接針對 Object 呼叫建構子（constructor），而不是 Object 型別的實例。

<br />

### Object.defineProperty(`obj`, `prop`, `descriptor`)

<br />

```js
var o = {};

Object.defineProperty(o, 'a', {
  value: 37
});

console.log(o.a); // 37

var bValue = 99;

Object.defineProperty(o, 'b', {
  get: function() {
    return bValue;
  },
  set: function(newValue) {
    bValue = newValue;
  }
})

console.log(o.b); // 99
o.b = 66;
console.log(bValue); // 66
console.log(o.b); //66
```

<br />

### prop

prop         | default   | description
------------ | --------- | ---
configurable | false     | `true` 則若且唯若此屬性則將可改變或刪除自相應物件
enumerable   | false     | `true` 則如果且唯若相應物件被列舉，將會列舉此屬性
value        | undefined | 設定 property 的值
writable     | false     | `true` 則該物件屬性可透過賦予運算子改變其值
get          | undefined | 作為 getter 形式，為屬性存在的函式
set          | undefined | 作為 setter 形式，為屬性存在的函式

<br />

## reference

[MDN | Object.defineProperty()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
