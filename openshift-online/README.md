#OpenShift Online介紹
>website: https://www.openshift.com/

![banner](https://github.com/krmfla/research-lab/blob/master/images/openshift.jpg "OpenShift Online")

由RedHat所開發的雲端運算平台

PaaS架構的雲端服務(平台即服務)

支援Node.js做為開發環境 (以及Java,Ruby,Python,PHP等語言)

提供免費空間方案：
 * 1GB的空間
 * 512MB伺服器記憶體
 * 1Gear的CPU核心(最高可到3 Gears)
 
##OpenShift Quick Start
>https://github.com/openshift-quickstart


##如何部屬 Nodejs 程式到 Openshift 上?
>reference: [http://single9.net/2015/10/如何部屬-nodejs-程式到-openshift-上/](http://single9.net/2015/10/%E5%A6%82%E4%BD%95%E9%83%A8%E5%B1%AC-nodejs-%E7%A8%8B%E5%BC%8F%E5%88%B0-openshift-%E4%B8%8A/)

在server.js檔案前面加入宣告，以啟用node.js做為運行環境 (= $ node server.js )
```
#!/bin/env node
```
若要印console，參數為：
```
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

於openshift中，啟動虛擬機器並建立一個Application
```
$ git clone ssh://Openshift給你的@nodejs-s9.rhcloud.com/~/git/nodejs.git/
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
##DEMO
<b>手機遠程操控簡報</b>

http://nodejs-krmfla.rhcloud.com/

(Node.js + Express + socket.io)

<b>多人競賽小遊戲</b>

數到3

http://three-krmfla.rhcloud.com

(Node.js + Express + socket.io)


