# For Loop

## for...in

`踩坑` for in 列舉出來的 object key, 不能保證其順序, 若要排序需另外判斷處理

```js
var a = {};
a['w01'] = 1;
a['w03'] = 3;
a['w02'] = 2;

console.log(a); // { w01: 1, w02: 2, w03: 3 }

for (key in a) {
  console.log(key); // w01, w03, w02
}
```
