## Performance

你不知道的Node.js性能優化，讀了之後水平直線上升
> 作者：腾讯云加社区 | 来源：segmentfault | 2018-12-12 15:05

http://developer.51cto.com/art/201812/588670.htm

### 調整記憶體

```cmd
$ node --max-semi-space-size=128 app.js
```

分配 64MB 或者 128MB 是比較合理的
