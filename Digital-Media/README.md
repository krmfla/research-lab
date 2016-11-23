#Streaming Media | 串流媒體
>https://zh.wikipedia.org/wiki/%E6%B5%81%E5%AA%92%E4%BD%93

<br>

#HTTP Live Streaming | HLS
>https://zh.wikipedia.org/wiki/HTTP_Live_Streaming

APPLE提出的HTTP-based影音串流技術

將影音分割成數個小片段，分段傳送資料

![structure](https://github.com/krmfla/research-lab/blob/master/images/Ozer_HLS_Figure_1.jpg "m3u8 structure")
>reference: [What is HLS (HTTP Live Streaming)?](http://www.streamingmedia.com/Articles/Editorial/What-Is-.../What-is-HLS-(HTTP-Live-Streaming)-78221.aspx)

<br>
#M3U | M3U8
>https://zh.wikipedia.org/wiki/M3U

影音播放列表的文件格式

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:20
#EXT-X-ALLOW-CACHE:NO
#EXT-X-MEDIA-SEQUENCE:260
#EXTINF:10,
http://WWW.SAMPLE.COM/media_001.ts
#EXTINF:10,
http://WWW.SAMPLE.COM/media_002.ts
#EXTINF:10,
http://WWW.SAMPLE.COM/media_003.ts
```
<br>
Extended M3U | 擴展M3U指令

指令    |  描述
------- | ---
#EXTM3U | 文件的頭部，必須是文件的第一行
#EXTINF | 指示多媒體文件的信息，包括播放時間和標題

<br>
新標籤

指令                    |  描述
----------------------- | ---
EXT-X-VERSION           | 播放列表版本的適應性
EXT-X-TARGETDURATION    | 定義每個TS的最大時間長度
EXT-X-ALLOW-CATCH       | 是否允許暫存
EXT-X-MEDIA-SEQUENCE    | 定義當前m3u8文件中，第一個文件的序列號。以做為ABR轉換時的對齊依據
EXT-X-STREAM-INF        | 定義第二層M3U8的屬性及位置<br>#EXT-X-STREAM-INF:ATTRIBUTE=VALUE,TTRIBUTE=VALUE<br>URI
EXT-X-KEY               | 定義加密方式和KEY文件的URI
EXT-X-PROGRAM-DATE-TIME | 第一個文件的絕對時間
EXT-X-ENDLIST           | 表明M3U8文件的結束。Live M3U8沒有該tag
EXT-X-DISCONTINUITY     | 表示之後的媒體文件和之前的媒體文件之间的編碼間斷

<br>

#Adaptive Bitrate Streaming | 自適性串流
>https://zh.wikipedia.org/wiki/%E8%87%AA%E9%81%A9%E6%80%A7%E4%B8%B2%E6%B5%81

將M3U8分兩層
第一層M3U8依客戶端的頻寬速率，切換適合的解析度

第二層M3U8為ts切片列表

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=380600,CODECS="avc1.4d00c,mp4a.40.2",RESOLUTION=320x180
http://WWW.SAMPLE.COM/master_250.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=655600,CODECS="avc1.77.30,mp4a.40.2",RESOLUTION=640x360
http://WWW.SAMPLE.COM/master_500.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=875600,CODECS="avc1.4d001f,mp4a.40.2",RESOLUTION=1024x576
http://WWW.SAMPLE.COM/master_700.m3u8
```



