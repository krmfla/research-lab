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
var singleton = function(fn){
  var result;
  return function(){
    return result || (result = fn .apply(this, arguments));
  };
};
 
var createMask = singleton(function(){
  return document.body.appendChild(document.createElement('div'));
});
```
> JavaScript Design Pattern - Singleton 單體模式<br>http://cythilya.blogspot.tw/2015/06/javascript-design-pattern-singleton.html

> 常用的Javascript设计模式 http://blog.jobbole.com/29454/

<br>

## Factory

工廠模式

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





