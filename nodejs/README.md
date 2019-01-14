# Node.js
>site: https://nodejs.org/en/

### express

for Node.js 的 Web 應用程式架構
```
$ npm install --save express
```

<br />

### fs

for Node.js 的檔案系統模組 (file system)

<br>

## 用node.js建立web server

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
node server.js
```

<br>

### 建立https server

> reference:<br>
> http://blog.kenyang.net/2016/04/16/setting-up-an-https-server-with-nodejs<br>
> http://jade.logdown.com/posts/233332-nodejs-express-4x-using-https-ssl

產生 SSL 憑證
```
$ openssl genrsa -out yourkey.pem 1024
$ openssl req -new -key  yourkey.pem -out  yourcsr.csr
$ openssl x509 -req -in yourcsr.csr -signkey yourkey.pem -out yourcert.pem
```

轉成 .pem
```
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

## Practice

**用 nodeJS 寫一隻爬蟲, 尋找有趣的活動, 並將結果寄到 e-mail**

可參考 getData.js

```
$ node getData.js
```

<br />
