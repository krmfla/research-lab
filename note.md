# markdown syntax

**keyboard key**

<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> 

```
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> 
```

<br />

**Link**

[LINK_TEXT](LINK_URL)

```
[LINK_TEXT](LINK_URL)
```

<br />

**image**

![firebase](https://github.com/krmfla/research-lab/blob/master/images/firebase.png)

```
![firebase](IMAGE_URL)
```

<br />

# Stack and Queue | 堆疊與佇列

Stack(堆疊): 用以執行函式, 依呼叫 (invoke) 順序，進入堆疊。

Blocking(阻塞): 等待堆疊內的函式執行完，才會處理新的請求。

Task Queue(工作佇列): 當處理非同步函式時，會將此函式的 callback 搬到 webAPIs。當 webAPIs內的函式得到回應時，就會搬到 Task Queue 中等候。

Event Loop(事件循環): 當 Stack 內是空的，就會將 Task Queue 的內容放到 Stack 內。



reference:  
[筆記] 理解 JavaScript 中的事件循環、堆疊、佇列和併發模式  
https://pjchender.blogspot.com/2017/08/javascript-learn-event-loop-stack-queue.html

<br />

# Module

JavaScript 模块化七日谈

http://huangxuan.me/2015/07/09/js-module-7day/

<br />

# Microdata

Microdata 以機器可解析的語言來描述網頁里的內容是什麼，比如網頁描述的是一本書、一篇影評或者一張菜譜。

https://lepture.com/zh/2015/fe-microdata

# Fetch API

提供了一個介面去獲取資源 (包含跨網路的資源）。這似乎有點像我們所熟悉的 XMLHttpRequest ，但這個新的 API 提供了更強更彈性的特點。

(IE不支援)

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

<br />

# nohup

no-hup，hup指的是SIGHUP（hangup)這個信號，nohup就是忽略SIGHUP這個信號的意思。

當我們從一個連線登出的時候，每個process都會收到一個SIGHUP信號，透過nohup所下達的命令就可以不受影響，繼續執行。

& 為背景執行

```
$ nohup your_command &
```

<br />
