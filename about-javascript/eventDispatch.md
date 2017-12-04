## 事件傳遞機制處理

### event.stopPropagation()

> Prevents further propagation of the current event in the capturing and bubbling phases.

阻止冒泡事件。

Sample: https://jsfiddle.net/krmfla/w8nr653w/4/

### event.stopImmediatePropagation()

> Prevents other listeners of the same event from being called.

停止事件繼續捕捉或冒泡傳遞，也阻止事件被傳入同元素中註冊的其它相同事件類型之監聽器。

### event.preventDefault()

> if the event does not get explicitly handled, <br /> its default action should not be taken as it normally would be.

如果事件可以被取消，就取消事件的預設行為。但事件仍會繼續傳遞。


### target.addEventListener(type, listener, ``useCapture``)

### Reference

**What's the difference between event.stopPropagation and event.preventDefault?**

> https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault
