# AJAX | 非同步的JavaScript與XML技術

> Asynchronous JavaScript and XML

AJAX 使用 XMLHttpRequest 物件來與伺服器進行通訊

<br />

**what is XML?**

XML | 可延伸標記式語言

> Extensible Markup Language

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```

<br />

## HTTP Request

<br />

## AJAX

```javascript
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

<br />

## JQuery AJAX

```javascript
$.ajax("URL_STRING");
```

```javascript
$.ajax({
  url: "URL_STRING",
  dataType: "DATATYPE"
}).done(SUCCESS_CALLBACK)
  .fail(FAIL_CALLBACK);
```

<br />

### JQuery Deferred

延遲執行callback，可串接多個任務

用來處理非同步的事件

```js
function a() {
  var deferred = $.Deferred();
  setTimeout(function() {
    deferred.resolve("a done");
  }, 1000);
  return deferred.promise();
}

function b() {
  var deferred = $.Deferred();
  setTimeout(function() {
    deferred.resolve("b done");
  }, 3000);
  return deferred.promise();
}

$.when(a(), b()).done(function(res1, res2) {
  console.log(res1); // a done
  console.log(res2); // b done
})
```

error handle

```js
function a() {
  var deferred = $.Deferred();
  setTimeout(function() {
    deferred.resolve("a done");
  }, 1000);
  return deferred.promise();
}

function b() {
  var deferred = $.Deferred();
  setTimeout(function() {
    deferred.reject("b fail");
  }, 3000);
  return deferred.promise();
}

$.when(a(), b()).done(function(res1, res2) {
  console.log(res1);
  console.log(res2);
}).fail(function(error) {
  console.error(error); // b fail
});
```

<br />

**狀態**

pending

done | success

fail | error

<br />

<b>promise</b>

Deferred的簡化，少了設定狀態的方法，以防止被變更狀態

<br />

### JQuery xml error 

**No Access-Control-Allow-Origin' header is present on the requested resource**

http://stackoverflow.com/questions/19821753/jquery-xml-error-no-access-control-allow-origin-header-is-present-on-the-req

the same-origin policy says that browsers should only allow ajax calls to services at the same domain of the HTML page.

<br />

## ES6 AJAX

<br />

## HTTP Status Code

1xx訊息

2xx成功

3xx重新導向

4xx用戶端錯誤

5xx伺服器錯誤

<br />

### 待研究

- [ ] AJAX 原理?
- [ ] headers 的用意
