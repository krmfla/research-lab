# JQuery

解讀 JQuery 原始碼的筆記

(JQuery v1.12.4)

<br />

Module

```javascript
(function(global, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
            factory(global, true) :
            function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }

    // Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {

  // ...
  
  var
    // Map over jQuery in case of overwrite
    _jQuery = window.jQuery,

    // Map over the $ in case of overwrite
    _$ = window.$;

    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }

        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }

        return jQuery;
    };

    // Expose jQuery and $ identifiers, even in
    // AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }

    return jQuery;
}));
```

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
