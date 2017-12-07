# JQuery

解讀 JQuery 原始碼的筆記

(JQuery v1.12.4)

<br />

## extend

```javascript
jQuery.fn.extend(OBJECT);
```

example

```javascript
jQuery.fn.extend({
  check: function() {
    return this.each(function() {
      this.checked = true;
    });
  },
  uncheck: function() {
    return this.each(function() {
      this.checked = false;
    });
  }
});
```

JQuery 依照功能, 將新增的方法註冊到 Jquery 中,

將相關功能包在 object 區塊內，從而更好閱讀。


<br />

## ready

```javascript
jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,

    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,

    // Hold (or release) the ready event
    holdReady: function(hold) {
        if (hold) {
            jQuery.readyWait++;
        } else {
            jQuery.ready(true);
        }
    },

    // Handle when the DOM is ready
    ready: function(wait) {

        // Abort if there are pending holds or we're already ready
        if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
        }

        // Remember that the DOM is ready
        jQuery.isReady = true;

        // If a normal DOM Ready event fired, decrement, and wait if need be
        if (wait !== true && --jQuery.readyWait > 0) {
            return;
        }

        // If there are functions bound, to execute
        readyList.resolveWith(document, [jQuery]);

        // Trigger any bound ready events
        if (jQuery.fn.triggerHandler) {
            jQuery(document).triggerHandler("ready");
            jQuery(document).off("ready");
        }
    }
});
```

<br />

## addClass

<br />

## ajax

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

實際上使用 options，從而統一格式

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

**reference:**

jQuery- v1.10.2 源码解读 https://github.com/chokcoco/jQuery-
