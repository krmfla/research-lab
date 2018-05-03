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
//父建構式
function AnimalMaker() {}

//父建構式的一個方法
AnimalMaker.prototype.walk = function() {
  return " walks on " + this.legs + " legs";
}

//靜態的 create 方法
AnimalMaker.create = function(type) {
  var conStr = type,
    newAnimal;

  //若建構式不存在則拋出錯誤
  if (typeof AnimalMaker[conStr] !== "function") {
    throw {
      name: "Error",
      message: conStr + " doesn't exist"
    };
  }

  //繼承父建構式，但僅此一次
  if (typeof AnimalMaker[conStr].prototype.walk !== "function") {
    AnimalMaker[conStr].prototype = new AnimalMaker();
  }

  //建立新實體
  newAnimal = new AnimalMaker[conStr]();
  return newAnimal;
};

//定義不同的子對象
AnimalMaker.dog = function() {
  this.legs = 4;
};

AnimalMaker.chicken = function() {
  this.legs = 2;
};

var whiteDog = AnimalMaker.create("dog");
var littleChicken = AnimalMaker.create("chicken");

whiteDog.walk();     // walks on 4 legs
littleChicken.walk(); // walks on 2 legs
```

<br>

## Iterator
迭代器模式

提供簡單的操作介面，而不會暴露資料來源或被更動。

```javascript
var agg = (function() {
  var index = 0;
  var data = [1, 2, 3, 4, 5];
  var length = data.length;

  return {
    next: function() {
      var element;
      if (!this.hasNext()) {
        return null;
      }
      element = data[index];
      index += 1;
      return element;
    },
    hasNext: function() {
      return index < length;
    },
    reWind: function() {
      index = 0;
    },
    current: function() {
      return data[index];
    }
  }
})();

while (agg.hasNext()) {
  console.log(agg.next()); //1, 2, 3, 4, 5
}

agg.reWind();
console.log(agg.current()); //1
```

<br>

## Decorator
裝飾者模式

讓物件可動態增加功能，客制化不同需求的功能

方法一：(繼承)
```javascript
function Sale(price) {
  this.price = price || 100;
}

Sale.prototype.getPrice = function() {
  return this.price;
};

Sale.prototype.decorate = function(decorator) {
  var F = function() {};
  var overrides = this.constructor.decorators[decorator];
  var i;
  var newObj;

  F.prototype = this;
  newObj = new F();
  newObj.uber = F.prototype; //讓子物件可以存取父物件
  for (i in overrides) {
    if (overrides.hasOwnProperty(i)) {
      newObj[i] = overrides[i];
    }
  }
  return newObj;
};

Sale.decorators = {};

Sale.decorators.fedtax = {
  getPrice: function() {
    var price = this.uber.getPrice();
    price += price * 5 / 100;
    return price;
  }
};

Sale.decorators.quebec = {
  getPrice: function() {
    var price = this.uber.getPrice();
    price += price * 7.5 / 100;
    return price;
  }
};

Sale.decorators.money = {
  getPrice: function() {
    return "$" + this.uber.getPrice().toFixed(2);
  }
};

Sale.decorators.cdn = {
  getPrice: function() {
    return "CDN$" + this.uber.getPrice().toFixed(2);
  }
};



var sale = new Sale(100);
sale = sale.decorate('fedtax');
sale = sale.decorate('quebec');
sale = sale.decorate('money');
console.log(sale.getPrice()); //$112.88

var sale2 = new Sale(150);
sale2 = sale2.decorate('quebec').decorate('cdn');
console.log(sale2.getPrice()); //CDN$161.25
```

<br>

方法二：
```javascript
function Sale(price) {
  this.price = price || 100;
  this.decorators_list = [];
}

Sale.decorators = {};

Sale.decorators.fedtax = {
  getPrice: function(price) {
    return price += price * 5 / 100;
  }
};

Sale.decorators.quebec = {
  getPrice: function(price) {
    return price += price * 7.5 / 100;
  }
};

Sale.decorators.money = {
  getPrice: function(price) {
    return "$" + price.toFixed(2);
  }
};

Sale.prototype.decorate = function(decorator) {
  this.decorators_list.push(decorator);
};

Sale.prototype.getPrice = function() {
  var price = this.price;
  var i;
  var max = this.decorators_list.length;
  var name;
  for (i = 0; i < max; i++) {
    name = this.decorators_list[i];
    price = Sale.decorators[name].getPrice(price);
  }
  return price;
};


var sale = new Sale(100);

sale.decorate('fedtax');
sale.decorate('quebec');
sale.decorate('money');

console.log(sale.getPrice()); //$112.88
```

<br>

## Strategy
策略模式

可在執行時選擇演算法

```javascript
var validator = {
  types: {},
  messages: [],
  config: {},
  validate: function(data) {
    var i, msg, type, checker, result_ok;
    this.messages = [];
    for (i in data) {
      if (data.hasOwnProperty(i)) {
        type = this.config[i];
        checker = this.types[type];
        if (!type) {
          continue;
        }
        if (!checker) {
          throw {
            name: "ValidationError",
            message: "No handler to validate type " + type
          };
        }
        result_ok = checker.validate(data[i]);
        if (!result_ok) {
          msg = "Invalid value for *" + i + "*, " + checker.instructions;
          this.messages.push(msg);
        }
      }
    }
    return this.hasErrors();
  },
  hasErrors: function() {
    return this.messages.length !== 0;
  }
};


validator.types.isNonEmpty = {
  validate: function(value) {
    return value !== "";
  },
  instructions: "the value cannot be empty"
};

validator.types.isNumber = {
  validate: function(value) {
    return !isNaN(value);
  },
  instructions: "the value can only be a valid number, e.g. 1, 3.14 or 201"
};

validator.types.isAlphaNum = {
  validate: function(value) {
    return !/[^a-z0-9]/i.test(value);
  },
  instructions: ""
};

var data = {
  first_name: "Super",
  last_name: "Man",
  age: "unknown",
  username: "o_O"
};

validator.config = {
  first_name: "isNonEmpty",
  age: "isNumber",
  userName: "isAlphaNum"
};

validator.validate(data);
if (validator.hasErrors()) {
  console.log(validator.messages.join("\n"));
}
```

若有複數條件，如何設計?

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

```html
<button id="addNewObserver">Add New Observer checkbox</button>
<span> check all<input id="mainCheckbox" type="checkbox" /></span>
<div id="observersContainer"></div>
```

```javascript
// ObserverList
// 訂閱列表
function ObserverList(){
	this.observerList = [];
}

ObserverList.prototype.add = function(obj){
	return this.observerList.push(obj);
};

ObserverList.prototype.count = function(){
	return this.observerList.length;
};

ObserverList.prototype.get = function(index){
	if(index > -1 && index < this.observerList.length){
  	return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex){
	var i = startIndex;
  
  while(i < this.observerList.length) {
  	if(this.observerList[i] === obj) {
    	return i;
    }
    i++;
  }
  return -1;
};

ObserverList.prototype.removeAt = function(index){
	this.observerList.splice(index, 1);
};

// Subject
// 主題, Subscribe Manager
function Subject() {
	this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
	this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer){
	this.observers.removeAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function(context) {
	var observerCount = this.observers.count();
  for(var i = 0; i < observerCount; i++) {
  	this.observers.get(i).update(context);
  }
}

// TEST
Subject.prototype.isSubscribe = function(observer) {
	return (this.observers.indexOf(observer, 0) > -1 ? true : false);
}

//The Observer
function Observer() {
	// --Default behavior
	this.update = function(){
  };
}

// Extend an object with an extension
function extend(obj, extension) {
	for (var key in extension) {
  	obj[key] = extension[key];
  }
}

// References to out DOM elements
var controlCheckbox = document.getElementById("mainCheckbox");
var addBtn = document.getElementById("addNewObserver");
var container = document.getElementById("observersContainer");

// Concrete Subject

// Extend the controlling checkbox with the Subject class
// --為 checkbox 增添　Subject methods
extend(controlCheckbox, new Subject());

// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function() {
	controlCheckbox.notify(controlCheckbox.checked);
  // 被點擊時，會通知註冊在 observers 內的物件
  // 將　check all 的　checked 值帶給被註冊的物件
};

addBtn.onclick = addNewObserver;

// Concrete Observer
function addNewObserver() {
	// create a new checkbox to be added
  var check = document.createElement("input");
  check.type = "checkbox";
  
  // Extend the checkbox with the Observer class
  extend(check, new Observer());
  
  // Override with custom update behavior
 	check.update = function(value) {
    this.checked =  value;
  };
  
  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver(check);
  
  // Append the item to the container
  container.appendChild(check);
  
  // TEST
  // Unsubscribe when feel annoying
  check.feelAnnoying = 0;
  check.onclick = function() {
  	if (check.feelAnnoying < 2) {
    	check.feelAnnoying += 1;
    } else if(controlCheckbox.isSubscribe(check)) {
    	controlCheckbox.removeObserver(check);
    }
  }
}
```

<br>

# Reference

> Javascript Design Patterns：https://addyosmani.com/resources/essentialjsdesignpatterns/book/

> 設計模式：https://cythilya.github.io/tags/%E8%A8%AD%E8%A8%88%E6%A8%A1%E5%BC%8F/

> 常用的Javascript设计模式： http://blog.jobbole.com/29454/




