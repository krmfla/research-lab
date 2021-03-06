# Regular Expression

## 格式

格式      | 用途
--------- | ----
^         | 匹配開頭字符
[xyz]     | 比對括弧內的任一個字元, ex: [ecm] 可比對 welcome 中的 e c m
[^xyz]    | 比對不在括弧內的任一個字元, ex: [^ecm] 可比對 welcome 中的 wlo
`+`       | 比對前一個字元一次或更多次 ex: a+ 一個或多個a
\         | 選取特定符號 ``\<``, ``\"``
.*        | 選取所有內容
?         | 比對前一個字符0次或1次,<br /> /e?l/ 可比對 “angel” 中的 “el”，也可以比對 “angle” 中的 “l”
?:pattern | 匹配pattern但不獲取匹配結果 <br /> “industr(?:y│ies)" 可以匹配 ”industry" 或 "industries"

匹配中文: [\u4e00-\u9fa5]

<br />

## 方法

#### [Methods that use regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_regular_expressions_in_JavaScript)
Method     | Description
---------- | ---
exec()	   | Executes a search for a match in a string. It returns an array of information or null on a mismatch.
test()	   | Tests for a match in a string. It returns true or false.
match()	   | Returns an array containing all of the matches, including capturing groups, or null if no match is found.
matchAll() | Returns an iterator containing all of the matches, including capturing groups.
search()   | Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
replace()  | Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
split()	   | Uses a regular expression or a fixed string to break a string into an array of substrings.

## 驗證

**驗證身份證格式**

```js
var reg = /^[A-Z]\d{9}$/;
var test1 = 'A123456789';
var test2 = 'a123456789';

console.log(reg.exec(test1)); // ["A123456789", index: 0, input: "A123456789", groups: undefined]
console.log(reg.exec(test2)); // null

console.log(reg.test(test1)); // true
console.log(reg.test(test2)); // false
```

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
/\<body.*\>\n?((?:.|\n)*?)\<\/body\>/g
```

<br />

**case: 將數字轉成羅馬數字**

<br />

**case: 遮蔽手機號碼的中間數字**

```javascript
var phone = "0910123456";

phone = phone.replace(/(\d{4})\d{3}(\d{3})/, '$1***$2');
// phone = 0910***456
```

**case: 從字串中取得特定值**

```javascript
var content = "1234~5678 萬元";
var reg = /(\d.*)~(\d.*)\s/g;
var match = reg.exec(content);

console.log(match[1]); // 1234
console.log(match[2]); // 5678
```

### reference:

正規表示式 Regular Expression | 就是愛程式

https://atedev.wordpress.com/2007/11/23/%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%A4%BA%E5%BC%8F-regular-expression/

正規表示式 Regular Expression | 陳鍾誠的網站

http://ccckmit.wikidot.com/regularexpression
