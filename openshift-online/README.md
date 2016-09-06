#Open Shift Online

由RedHat所開發的雲端運算平台

支援Node.js做為運行環境

##如何部屬 Nodejs 程式到 Openshift 上?
>reference: [http://single9.net/2015/10/如何部屬-nodejs-程式到-openshift-上/](http://single9.net/2015/10/%E5%A6%82%E4%BD%95%E9%83%A8%E5%B1%AC-nodejs-%E7%A8%8B%E5%BC%8F%E5%88%B0-openshift-%E4%B8%8A/)

```
#!/bin/env node
```

```javascript
http.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP, function(){
  console.log("start");
});
```
package.json
```
{
  "name": "OpenShift-Sample-App",
  "version": "1.0.0",
  "description": "OpenShift Sample Application",
  "keywords": [
    "OpenShift",
    "Node.js",
    "application",
    "openshift"
  ],
  "author": {
    "name": "OpenShift",
    "email": "ramr@example.org",
    "url": "http://www.openshift.com/"
  },
  "homepage": "http://www.openshift.com/",
  "repository": {
    "type": "git",
    "url": "https://github.com/openshift/origin-server"
  },

  "engines": {
    "node": ">= 0.6.0",
    "npm": ">= 1.0.0"
  },

  "dependencies": {
    "express": "~3.4.4"
  },
  "devDependencies": {},
  "bundleDependencies": [],

  "private": true,
  "main": "server.js"
}
```

用git佈署到openshift上
```
git add .
git commit -m 'My changes'
git push
```
看到此訊息即代表佈署完成
```
remote: Git Post-Receive Result: success
```
