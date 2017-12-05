# JQuery

解讀 JQuery 原始碼的筆記

(JQuery v1.12.4)

<br />

## addClass

<br />

## AJAX

options 用法

```javascript
ajax: function(url, options) {
    // If url is an object, simulate pre-1.5 signature
    if (typeof url === "object") {
        options = url;
        url = undefined;
    }
    // Force options to be an object
    options = options || {};
    
```
url 可能為字串或物件, 依照 url 的類型，轉換成 options

實際上使用 options

<br />

若未設 datatype, 會依格式判斷, js => ``script``, html => ``html``

```javascript
s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
```

<br />

載入 script 檔時會自動執行?

<br />

如何實作 promise?

<br />

reference: 

jQuery- v1.10.2 源码解读 https://github.com/chokcoco/jQuery-
