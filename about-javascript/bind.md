# Bind

用法和 call 類似, 不同在於會產生新的函式

```js
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```

**example**

```js
var objA = {
  name: "A"
}

var objB = {
  name: "B",
  say: function(gender, age) {
    console.log(gender + "." + this.name + " is " + age + " year's old.");
  }
}

var objC = objB.say.bind(objA, "Miss", 39);
objC(); // Miss.A is 39 year's old.
```

<br />

# call

```js
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

**example**

```js
var objA = {
  name: "A"
}

var objB = {
  name: "B",
  say: function(gender, age) {
    console.log(gender + "." + this.name + " is " + age + " year's old.");
  }
}

objB.say("Mr", 24); // Mr.B is 24 year's old.
objB.say.call(objA, "Miss", 26); // Miss.A is 26 year's old.
```

<br />

# apply
```js
fun.apply(thisArg, [ArgsArray])
```

**example**

```js
var objA = {
  name: "A"
}

var objB = {
  name: "B",
  say: function(gender, age) {
    console.log(gender + "." + this.name + " is " + age + " year's old.");
  }
}

objB.say.apply(objA, ["Mr", 33]); // Mr.A is 33 year's old.
```

### reference:

https://ithelp.ithome.com.tw/articles/10198035
