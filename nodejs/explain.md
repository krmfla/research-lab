## sample code

```node
express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => {
    res.render('pages/index');
  })
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  })
```

### request

### response

### use

### get

### post

### set

### process

**pid**
Process ID

<br />

## issues

**TypeError: Converting circular structure to JSON**

```node
.get('/helloworld', (req, res) => {
  res.send(JSON.stringify(req));
})
```

這個問題是如何產生? 如何解決?
