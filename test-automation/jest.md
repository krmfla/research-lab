# Jest

> a JavaScript Testing Framework

<br />

## Testing Asynchronous Code

[reference](https://jestjs.io/docs/zh-Hans/asynchronous)

### use a single argument called `done`

```js
it('test done', done => {
    function callback(data) {
        console.log('execute callback');
        expect(data).toBe('A');
        done();
    }
    callback('A');
});
```



```js
it('test promise', () => {
    function callback() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('promise resolved');
                return resolve('PROMISE');
            });
        });
    }

    return callback().then(data => {
        expect(data).toBe('PROMISE');
    });
})
```

```js
it('test A', async () => {
    const text = await new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('return resolved');
            resolve('A');
        }, 500);
    });
    expect(text).toBe('A');
});
```
