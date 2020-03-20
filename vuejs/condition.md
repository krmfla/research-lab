## v-else-if

#### html

```html
<div id="app">
  <p v-if="exchange"> exchange </p>
  <p v-else-if="game_over"> game_over </p>
  <p v-else> no data </p>
</div>
```

#### javascript

```js
var app = new Vue({
  el: "#app",
  data: {
    exchange: false,
    game_over: false,
  }
})
```
