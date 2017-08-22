[<< Software Design](https://github.com/krmfla/research-lab/blob/master/Software-Design/README.md)

# Design Principles

設計原則

<br>

## 3 Key Software Principles You Must Understand
> Chris Peters 7 Sep 2012 <br />
> http://code.tutsplus.com/tutorials/3-key-software-principles-you-must-understand--net-25161

<b>Don't Repeat Yourself (DRY)</b>
<br />

<b>Keep it Simple Stupid (KISS)</b>
 * Single-Responsibility
 * responsibility assignment
 * Separation of concerns (關注點分離)
 * 任務單純化

<b>You aren't gonna need it (YAGNI)</b>
<br />

<b>loose coupling high cohesion </b> (高內聚低耦合)
<br />

<b>principle of least surprise</b> (最少意外原則)

<br />

## Refactoring - 程式重構
> Teddy Chen 2014/4/7<br />
> http://teddy-chen-tw.blogspot.tw/2014/04/refactoring.html

<br />

## Unix哲學 (Unix philosophy)
 * 程式應該只關注一個目標，並儘可能把它做好。<br> Write programs that do one thing and do it well.
 * 讓程式能夠互相協同工作。<br> Write programs to work together.
 * 應該讓程式處理文字資料流，因為這是一個通用的介面。<br> Write programs to handle text streams, because that is a universal interface.
 
## 考慮各種可能的情境
* 有權限
* 無權限
* 失敗時(error / connected fail)
* 有資料無內容
