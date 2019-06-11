# Jasmine

> https://jasmine.github.io/

<br />

## unit test 的意義

* 每個 spec 應該只測試一種情境
* 不需要去測試私有方法
* 驗證程式邏輯的正確性(靜態:丟測試資料 | api server:資料是否一致)

<br />

## sample code

script.js (要進行驗證的程式)
```js
function Async() { }
Async.prototype.fetch = function (cb) {
    $.ajax('/url')
        .done(function (data) {
            cb(data);
        });
};
```

<br />

spec.js (透過 jasmine 進行驗證的腳本)
```js
// 每次執行 spec 前，預先設定的內容
beforeEach(function () {
    var fixture = "<div id='app'></div>";
    document.body.insertAdjacentHTML('afterbegin', fixture);
});

// 每次執行 spec 後，要執行的程式
afterEach(function () {
    var app = document.getElementById("app");
    document.body.removeChild(app);
});

// group of specs
describe("DOM element", function () {
    // single spec
    it("element of app should be exist", function () {
        var element = document.getElementById("app");
        expect(element.id).toEqual("app");
    });
});

describe("Async", function () {
    it("should fetch from a server", function () {
        var async = new Async();
        var callback = jasmine.createSpy('callback');
        var test_data = [
            { x: 0, y: 0 }
        ];
        var data;

        // when $.ajax() method called
        spyOn($, 'ajax').and.callFake(function (req) {
            var d = $.Deferred();
            d.resolve(test_data);
            return d.promise();
        });

        async.fetch(callback);

        data = callback.calls.mostRecent().args[0];
        expect(data[0].x).toEqual(test_data[0].x);
    });
});
```

<br />

## methods

**createSpy**

<br />

**spyOn(`obj`, `methodName`)**

<br />

### reference

**[Testing] Jasmine — JavaScript 的 BDD 測試架構**

https://medium.com/@dd0425/testing-jasmine-7f3b5ad09134

<br />

**Testing $.ajax calls with Jasmine 2**

https://coderwall.com/p/pbsi7g/testing-ajax-calls-with-jasmine-2



