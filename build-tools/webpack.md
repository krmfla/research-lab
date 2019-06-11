# Webpack

> Webpack is an open-source JavaScript module bundler. <br /> Webpack takes modules with dependencies and generates static assets representing those modules.

https://webpack.js.org/

<br />

## yarn

新的 package 管理器

```sh
$ npm install yarn --g
$ yarn --version

# 建立新資料夾並初始化專案
$ yarn init -y
```

<br />

## install Webpack

```cmd
$ yarn add -D webpack webpack-node-externals

$ yarn add -D babel-preset-env babel-plugin-transform-object-rest-spread babel-core babel-loader 
```

<br />

reference:  
[Day-13] Webpack 與 babel 轉譯  
https://ithelp.ithome.com.tw/articles/10193299

<br />

### loader 懶人包

```
$ npm install --save-dev babel-loader style-loader css-loader sass-loader less-loader url-loader
```

<br />

## AMD / CMD

<br />

**reference:**

Webpack、Browserify和Gulp三者之间到底是怎样的关系？

https://www.zhihu.com/question/37020798
