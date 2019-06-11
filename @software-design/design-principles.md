[<< Software Design](https://github.com/krmfla/research-lab/blob/master/Software-Design/README.md)

# Design Principles

設計原則

<br>

## 3 Key Software Principles You Must Understand
> Chris Peters 7 Sep 2012 <br />
> http://code.tutsplus.com/tutorials/3-key-software-principles-you-must-understand--net-25161

<b>Don't Repeat Yourself (DRY)</b>

<br>

<b>Keep it Simple Stupid (KISS)</b>
 * Single-Responsibility
 * responsibility assignment
 * Separation of concerns (關注點分離)
 * 任務單純化

<b>You aren't gonna need it (YAGNI)</b>

<br>

<b>loose coupling high cohesion </b> (高內聚低耦合)

<br>

<b>principle of least surprise</b> (最少意外原則)

<br>
<br>

## SOLID
物件導向設計原則

### ``S`` Single responsibility principle
單一功能原則

一個class只做一件事

<br>

### ``O`` Open/closed principle
開放封閉原則

軟體設計要容易擴充功能，擴充時不必修改原有的程式

<br>

### ``L`` Liskov substitution principle
里氏替換原則

子類必須能夠替換其父類別？
設計父類別時，只把所有的子類都有的東西放進來？

<br>

### ``I`` Interface segregation principle
接口隔離原則

多個特定客戶端接口要好於一個寬泛用途的接口

<br>

### ``D`` Dependency inversion principle
依賴反轉原則

一個方法應該遵從「依賴於抽象而不是一個實例」的概念

依賴注入是該原則的一種實現方式。

<br>
<br>

## Unix哲學 (Unix philosophy)
 * 程式應該只關注一個目標，並儘可能把它做好。<br> Write programs that do one thing and do it well.
 * 讓程式能夠互相協同工作。<br> Write programs to work together.
 * 應該讓程式處理文字資料流，因為這是一個通用的介面。<br> Write programs to handle text streams, because that is a universal interface.
 
## 考慮各種可能的情境
* 有權限
* 無權限
* 失敗時(error / connected fail)
* 有資料無內容

<br>
<br>
 
白話- OO設計原則 (SOLID原則) - 附生活實例
 
http://rockssdlog.blogspot.tw/2012/03/oo-solid.html

Programming Principles

http://webpro.github.io/programming-principles/?utm_campaign=CodeTengu&utm_medium=web&utm_source=CodeTengu_68
