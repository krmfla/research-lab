# Regular Expression

## 格式

格式      | 用途
--------- | ----
\         | 選取特定符號 ``\<``, ``\"``
.*        | 選取所有內容
?         | 比對前一個字符0次或1次,<br /> /e?l/ 可比對 “angel” 中的 “el”，也可以比對 “angle” 中的 “l”
?:pattern | 匹配pattern但不獲取匹配結果 <br /> “industr(?:y│ies)" 可以匹配 ”industry" 或 "industries"

<br />

## 驗證

**驗證身份證格式**

<br />

## 將特定內容轉換

**case: 將 script 加上 domain**

```html
var scriptString = "<script type='text/javascript' src='js/someScript.js'></script>";

```

<br />

**case: 取資料包含換行**
```html
<body>
  <div>...</div>
</body>
```
解法：

```
/\<body\>((?:.|\n)*)\<\/body>/g
```

<br />

**case: 將數字轉成羅馬數字**

<br />

### reference:

正規表示式 Regular Expression | 就是愛程式

https://atedev.wordpress.com/2007/11/23/%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%A4%BA%E5%BC%8F-regular-expression/

正規表示式 Regular Expression | 陳鍾誠的網站

http://ccckmit.wikidot.com/regularexpression
