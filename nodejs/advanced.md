## 初始化 project
```
npm init -f
```

<br />

## express.js

```node
// sample code
express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => {
    res.render('pages/index');
  })
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  })
```

### req | request

### res | response

### use

### get

### post

### set

<br />

## process | 進程

**pid**

Process ID

<br />

## exports

<br />

## morgan | 連線存取紀錄(for develpoment)

mogran 是一個 HTTP request logger, 將存取結果如 200、404 的狀態碼顯示出來。

install
```sh
$ yarn add morgan
#或
$ npm install morgan
```

在 express 中使用
```node
import morgan from 'morgan';

// HTTP request logger middleware for node.js
app.use(morgan('dev'));
```

```cmd
GET /hello 304 9.235 ms - -
POST /test 200 0.497 ms - 78
```



## issues

**TypeError: Converting circular structure to JSON**

```node
.get('/helloworld', (req, res) => {
  res.send(JSON.stringify(req));
})
```

這個問題是如何產生? 如何解決?
