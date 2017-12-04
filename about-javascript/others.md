## 使用雙驚嘆號 !! 的寫程式技巧

目的：
兩個！！的功用主要是將值轉為true跟false，也就是說，這個函式回傳的，只會有true跟false。

在Javascript當中，有些值跟false是等價的：

``false``
``Null``
``undefined``
``空字串（ex. "" or \''）``
``數字0``
``數字Nan``

第一個！的功用就是將以上的值轉為true，其他的值轉為false
第二的！再將true轉為false，false轉為true，也就是轉回來

確保回傳的值是boolean。

使用上會比Boolean()還要簡單，速度也比較快

使用雙驚嘆號 !! 的寫程式技巧
> reference: http://tom76kimo.blogspot.tw/2013/08/blog-post_22.html
