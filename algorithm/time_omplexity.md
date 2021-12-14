# 時間複雜度

## Constant Run Time (`O(1)`)
常數

## Linear Run Time (`O(n)`)
線性

## Exponential Run Time (`O(n^2)`)
指數增長

```js
function doMath(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      count++
    }
  }
  return count;
}

console.log(doMath(9));
```

## Logarithmic Run Time (`O(log n)`)
對數
```js
function binarySearch (arr, key) {
  let low = 0
  let high = arr.length - 1
  let mid
  let element
  
  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10)
    element = arr[mid]
    if (element < key) {
      low = mid + 1
    } else if (element > key) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 2));
```

**資料須為有序的情況**

**每輪都切一半的量來比對, 以現在值跟目標值的大小，來決定往前還是往後尋找**



![time_complexity](./images/time_complexity.png)

## reference 
[[演算法] Big O Notation & Time Complexity](https://pjchender.blogspot.com/2017/09/big-o-notation-time-complexity.html)
