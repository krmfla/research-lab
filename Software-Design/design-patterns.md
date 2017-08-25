[<< Software Design](https://github.com/krmfla/research-lab/blob/master/Software-Design/README.md)

# Design Patterns

設計模式

> Software design pattern is a general reusable solution to a commonly occurring problem within a given context in software design.

<br>

# Javascript Design Patterns

<br>

## Class & Instance

<br>

## 程式碼重用模式

<br>

## Singleton
單體模式

同一class只有唯一一個實體。

```javascript
var Universe;

(function() {
  var instance;

  Universe = function Universe() {
    if (instance) {
      return instance;
    }
    instance = this;

    this.start_time = 0;
    this.bang = "big";
  };
})();

var uni1 = new Universe();
var uni2 = new Universe();

console.log(uni1 === uni2); //true

Universe.prototype.nothing = true;
var uni3 = new Universe();

console.log(uni1.nothing); // true
```

<br>

### Bridge Pattern | 橋接模式

將實現部分與抽象部分分離， 使兩者可以獨立地變化

```javascript
//用橋接模式來實作單體模式
var singleton = function(fn){
  var result;
  return function(){
    return result || (result = fn .apply(this, arguments));
  };
};
 
var createMask = singleton(function(){
  return document.body.appendChild(document.createElement('div'));
});

createMask(); // create element
createMask(); // will return instance

var createMask2 = singleton(function(){
  return document.body.appendChild(document.createElement('div'));
});
createMask2(); // create element, 與 createMask 各自獨立
```



<br>

## Factory
工廠模式

透過class來建立物件，且無須先知道明確的型別。

```javascript
function AnimalMaker() {}

AnimalMaker.prototype.walk = function() {
  return this.name + " walks on " + this.legs + " legs";
}
//to be continue
```

<br>

## Iterator
迭代器模式

<br>

## Decorator
裝飾者模式

<br>

## Strategy
策略模式

<br>

## Facade
外觀模式

<br>

## Proxy
代理模式

<br>

## Mediator
中介者模式

<br>

## Observer
觀察者模式

<br>

# Reference

> Javascript Design Patterns：https://addyosmani.com/resources/essentialjsdesignpatterns/book/

> 設計模式：https://cythilya.github.io/tags/%E8%A8%AD%E8%A8%88%E6%A8%A1%E5%BC%8F/

> 常用的Javascript设计模式： http://blog.jobbole.com/29454/




