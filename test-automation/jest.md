# Jest

> a JavaScript Testing Framework

<br />

### npm Trends

`Jest` vs `Jasmine` vs `Mocha`

![testing_framework](https://github.com/krmfla/research-lab/blob/master/images/testing_framework.png)

https://www.npmtrends.com/jest-vs-jasmine-vs-mocha

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
<br />

### Promise

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

<br />

### Async / Await

```js
it('asynchronous test', async () => {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log('return asynchronous');
                resolve('asynchronous');
            }, 500);
        });
    }

    const text = await fetchData();
    expect(text).toBe('asynchronous');
});
```

<br />

### After the Promise responds, run the　next test

```js
describe('asynchronous test',  () => {
    function getList() {
        return new Promise((resolve, reject) => {
           setTimeout(function() {
               resolve('success');
           }, 600);
       });
    }

    it('step 1', async() => {
        const response = await getList();
        async_obj._res = response;
        expect(response).toBe('success');
    });

    it('step 2', () => {
        expect(async_obj._res).toBe('success');
    });
});
```
