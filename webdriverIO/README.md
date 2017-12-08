# WebdriverIO介紹
>website: http://webdriver.io/

<br />

**初探 WebdriverIO 前端自動化測試 | alincode**

http://blog.mokayo.com/weddriverio-auto-testing/

<br />

**安裝 WebdriverIO**
```
npm install webdriverio -D  
```

**安裝 selenium standalone**
```
npm install selenium-standalone -g
selenium-standalone install
```

need install java, and export path
```
export PATH="/c/Program Files/Java/<JDK VERSION>/bin:$PATH"
```

**啟動 selenium standalone**
```
selenium-standalone start  
```
<br />

## 撰寫第一個自動測試
```javascript
var webdriverio = require('webdriverio');  
var options = { desiredCapabilities: { browserName: 'chrome' } };  
var client = webdriverio.remote(options);

client  
    .init()
    .url('https://www.google.com.tw')
    .setValue('#lst-ib', 'webdriverIO')
```
<br />

**Selecting Elements in WebdriverIO**
> http://blog.kevinlamping.com/selecting-elements-in-webdriverio/

**selenium-webdriver**
> http://seleniumhq.github.io/selenium/docs/api/javascript/index.html
