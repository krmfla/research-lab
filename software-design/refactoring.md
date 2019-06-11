# Refactoring
重構

不改變外部行為下，改善程式內部設計，提高可讀性及更容易維護。

<br>

## Code Smell
代碼異味 (bad smell)

<br>

## Duplicated Code
程式碼重複

* 降低可維護性
* 程式碼更長

解決方法：``Extract Method``， ``Pull Up Field``， ``Form Template Method``， ``Substitute Algorithm``， ``Extract Class``

<br>

## Long Method
過長函數

* 不易理解
* 不易重用

解決方法：``Extract Method``， ``Replace Temp with Query``， ``Introduce Parameter Object``， ``Preserve Whole Object``， 
``Replace Method with Method Object``， ``Decompose Conditional``

<br>

## Large Class
過大類別

* 不易重用
* 不易維護

解決方法：``Extract Class``， ``Extract Subclass``， ``Extract Interface``， ``Duplicate Observed Data``

<br>

## Long Parameter List
過長參數列

* 難以理解
* 介面改變

解決方法：``Replace Parameter with Method``，``Preserve Whole Object``，``Introduce Parameter Object``

<br>

## Divergent Change
發散式修改

如果某個class经常因為不同的原因在不同的方向上發生變化，這是一種「責任耦合」的現象

解決方法：``Extract Class``

<br>

## Shotgun Surgery
霰彈式修改

某種修改會跨越多個類別

解決方法：``Move Method``，``Move Field``，``Inline Class``

<br>

## Feature Envy
特性依戀

``Move Method``，``Extract Method``

<br>

## Data Clumps
資料泥團

<br>

## Primitive Obsession
基本型別偏執

<br>


## Switch Statements
Switch敘述

<br>

## Parallel Inheritance Hierarchies
平行繼承架構

<br>

## Lazy Class
冗員類別

<br>

## Speculative Generality
夸夸其談未來性

<br>

## Temporary Field
暫時欄位

<br>

## Message Chains
訊息鏈

<br>

## Middle Man
中間人

<br>

## Inappropriate Intimacy
不當的親密關係

<br>

## Alternative Classes with Different Interfaces
異曲同工的類別

<br>

## Incomplete Library Class
不完整的程式庫類別

<br>

## Data Class
資料類別

<br>

## Refused Bequest
被拒絕的遺贈

<br>

## Comments
註解



<br>

什麼是Refactoring？

http://teddy-chen-tw.blogspot.tw/2014/04/refactoring.html

http://teddy-chen-tw.blogspot.tw/search/label/Refactoring?updated-max=2014-05-12T00:00:00%2B08:00&max-results=20&start=45&by-date=false

<br>

Refactoring Guru

https://refactoring.guru/smells/long-method
