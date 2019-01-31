# Performance

<br />

## 調整記憶體

``--max-old-space-size`` 可以限制V8里面的 old space 的最大值  

``--max-semi-space-size`` 能限制 new space 里面的 from 或者 to 空间的最大值  

``--noincremental_marking`` 是不使用增量markingGC算法的意思，开了这个选项会让 old space 内存到达最大值的时候才进行一次full gc  

``--trace-gc`` 能看到V8的gc日志  

```cmd
$ node --max-semi-space-size=128 app.js
```

分配 64MB 或者 128MB 是比較合理的

**你不知道的 Node.js 性能優化，讀了之後水平直線上升**
> 作者：腾讯云加社区 | 来源：segmentfault | 2018-12-12 15:05

http://developer.51cto.com/art/201812/588670.htm

<br />

### 記憶體管理

```node
const v8 = require('v8');
console.log(v8.getHeapSpaceStatistics());
```

result:

```node
[{
    space_name: 'new_space',
    space_size: 16777216,
    space_used_size: 5843740,
    space_available_size: 2278628,
    physical_space_size: 16777216
},
{
    space_name: 'old_space',
    space_size: 11743232,
    space_used_size: 10392500,
    space_available_size: 901572,
    physical_space_size: 11743232
},
{
    space_name: 'code_space',
    space_size: 1482752,
    space_used_size: 971808,
    space_available_size: 5408,
    physical_space_size: 1482752
},
{
    space_name: 'map_space',
    space_size: 1073152,
    space_used_size: 445324,
    space_available_size: 577908,
    physical_space_size: 1073152
},
{
    space_name: 'large_object_space',
    space_size: 2826240,
    space_used_size: 2770260,
    space_available_size: 715747072,
    physical_space_size: 2826240
}]
```

<br />

**Node.js内存管理机制分享**
> 作者：calvinxiao | 2017.03.29

https://www.jianshu.com/p/d5f596f62d3f
