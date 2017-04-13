# Node.js
>site: https://nodejs.org/en/

### express

for Node.js的Web應用程式架構
```
$ npm install --save express
```

<br>

## 用node.js建立web server

```node
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public')); 讓public內資源能被調用

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
```

<br>

### 建立https server

> reference: http://blog.kenyang.net/2016/04/16/setting-up-an-https-server-with-nodejs
>            http://jade.logdown.com/posts/233332-nodejs-express-4x-using-https-ssl

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
