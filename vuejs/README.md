# VueJS

<br />

## Lifecycle

![lifecycle](./lifecycle.png)

https://vuejs.org/v2/guide/instance.html

## Render Function

![render-function](./render-function.jpeg)

https://www.w3cplus.com/vue/vue-render-function.html

<br />

## vue.mixin

<br />

## diff 算法原理

1.傳統作法如 JQuery 組出畫面, 若修改部分 data 資料, 需重新渲染畫面。用 diff 的方式只需算出及修改更新後的節點

2.根據真實 DOM 生成 virtual DOM, 當資料改變時, 新的 vNode 與舊的 oldVnode 做比對, 有不同即修改並反應在真實 DOM 上。

3. diff 算法是同層級比較, 不會跨層

當 `數據發發生改變` -> `比對 virtual DOM 節點` -> `將新的結果更新到真實 DOM`

[详解vue的diff算法](https://juejin.im/post/5affd01551882542c83301da)

<br />

## [Component](https://github.com/krmfla/vue-template/blob/master/component.md)

<br />

## [Vue Router, Vue-CLI](https://github.com/krmfla/vue-template)
