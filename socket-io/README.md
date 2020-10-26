# [基礎知識](base.md)

<br />

# Socket.IO

http://socket.io/

可讓不同瀏覽器或裝置之間，互相溝通的程式庫

即時響應，無需重整頁面

應用：
 * 即時聊天室
 * 連線遊戲
 * Single Page Application

引入Socket.IO
``` javascript
<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
```
## 即時聊天室

>reference: [http://socket.io/get-started/chat/](http://socket.io/get-started/chat/)

sample code: [example-chatRoom](https://github.com/krmfla/research-lab/tree/master/socket-io/sample-chatRoom)

:exclamation:需先安裝node.js

用node.js運行app.js
```
$ node app.js
```
在瀏覽器上運行
```
http://localhost:3000
```
