#WebdriverIO介紹
>website: http://webdriver.io/
<br>

>初探 WebdriverIO 前端自動化測試: http://blog.mokayo.com/weddriverio-auto-testing/

<b>安裝 WebdriverIO</b>
```
npm install webdriverio -D  
```
<b>安裝 selenium standalone</b>
```
npm install selenium-standalone -g
selenium-standalone install
```
need install java, and export path
```
export PATH="/c/Program Files/Java/<JDK VERSION>/bin:$PATH"
```

<b>啟動 selenium standalone</b>
```
selenium-standalone start  
```
<br>

##撰寫第一個自動測試
```javascript
var webdriverio = require('webdriverio');  
var options = { desiredCapabilities: { browserName: 'chrome' } };  
var client = webdriverio.remote(options);

client  
    .init()
    .url('https://www.google.com.tw')
    .setValue('#lst-ib', 'webdriverIO')
```
<br>

<b>Selecting Elements in WebdriverIO</b>
>http://blog.kevinlamping.com/selecting-elements-in-webdriverio/
