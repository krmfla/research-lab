# Heroku

## create a nodeJS app on Heroku

### notice:

package.json
```json
"scripts": {
    "start": "node app.js"
},
```

app.js
```js
const PORT = process.env.PORT || 5000;
```

### debug

```shell
heroku logs --tail
```


## create PostgreSQL on Hroku
