# Node.js
>site: https://nodejs.org/en/

<br />
  
## why using node.js?

* chrome V8 引擎讓 javascript 可高效運行
* 事件驅動 (event-driven)
* 非阻斷式的輸入/輸出 (non-blocking I/O)
* 程式輕量、開發快速¯、運作效率高

**think:**

node.js 是單執行緒，如何非同步處理 I/O?

> 有一個 poll 用來接受 request，透過 event loop 輪詢。

<br />

### Express.js

for Node.js 的 Web 應用程式架構

```sh
# install express
$ npm install --save express
```

### Express Generator | 快速建置 Express 環境

```cmd
$ npm install -g express-generator
$ express -f {專案名稱}
```

### fs

for Node.js 的檔案系統模組 (file system)

<br>

## 用 node.js + express.js 建立 web server

server.js

```node
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public')); //讓public內資源能被調用

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
```

run

```
$ node server.js
```

<br>

### 建立https server

> reference:<br>
> http://blog.kenyang.net/2016/04/16/setting-up-an-https-server-with-nodejs<br>
> http://jade.logdown.com/posts/233332-nodejs-express-4x-using-https-ssl

產生 SSL 憑證
```cmd
$ openssl genrsa -out yourkey.pem 1024
$ openssl req -new -key  yourkey.pem -out  yourcsr.csr
$ openssl x509 -req -in yourcsr.csr -signkey yourkey.pem -out yourcert.pem
```

轉成 .pem
```cmd
$ openssl x509 -in yourkey.crt -out yourkey.pem -outform PEM
$ openssl x509 -in yourcert.crt -out yourcert.pem -outform PEM
```

server.js

```node
var https   = require("https");
var express = require("express");
var fs      = require("fs");

var SERVER_CONFIG = {
    key:  fs.readFileSync('yourkey.pem'),
    cert: fs.readFileSync('yourcert.pem')
};

var app = express();
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

https.createServer(SERVER_CONFIG, app)
     .listen(3000,function() {
         console.log('listening on *:3000');
     }
);
```

<br>

## CORS on ExpressJS

```node
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});
```

*reference: https://enable-cors.org/server_expressjs.html*

<br>

## 參數傳遞

body-parser | 解析 HTTP 請求的插件
```cmd
$ npm install body-parser
```

```node
const express = require('express');
const bodyParser = require('body-parser');

express()
  .use(bodyParser.urlencoded({ 
    extended: true  //允許配置使用 querystring(false) 或 qs(true) 来解析數據
  }))
  .use(bodyParser.json())
  .post("/", function (req, res) {
    console.log(req.body.user.name)
  });
```

## Practice

**用 nodeJS 寫一隻爬蟲, 尋找有趣的活動, 並將結果寄到 e-mail**

可參考 getData.js

```
$ node getData.js
```
