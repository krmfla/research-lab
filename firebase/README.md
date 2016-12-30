#Firebase

>https://firebase.google.com/features/

![banner](https://github.com/krmfla/research-lab/blob/master/images/firebase.png "Firebase")

##What Firebase can do?

<br>

##Firebase: Build a Real Time Web Chat App
https://codelabs.developers.google.com/codelabs/firebase-web/#0

Initialize
```javascript
//引入firebase.js及project config
//設定 > 一般 > 將 Firebase 加入您的網路應用程式
<script src="https://www.gstatic.com/firebasejs/3.6.4/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: APIKEY,
    authDomain: AUTH_DOMAIN, 
    databaseURL: DATABASE_URL,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
</script>
```


### API
<b>firebase.auth()</b>

帳號驗證

>https://firebase.google.com/docs/reference/js/firebase.auth.Auth

<br>

<b>firebase.database()</b>

資料庫

>https://firebase.google.com/docs/reference/js/firebase.database

<br>

<b>firebase.database().ref()</b>

資料位置參照 - reference

>https://firebase.google.com/docs/reference/js/firebase.database.Reference


API                     | Description
----------------------- | -----------
ref.on(EVENT, CALLBACK) | 當資料改變時，觸發回呼函式<br>eventType: "value", "child_added", "child_changed", "child_removed", "child_moved."
ref.off()               | 移除監聽

Synchronize Messages







##當資料改變時，如何即時更新Client端的資料

<b>實做的機制</b>

<b>是否有Listener的人數上限</b>

<br>
##對瀏覽器的支援度？

## 應用
 * log追蹤
 * 線上應用程式
