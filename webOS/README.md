#webOS
> webOS developer site: http://developer.lge.com/webOSTV/develop/

<br>
##Web SDK v3.0.0
http://developer.lge.com/webOSTV/sdk/web-sdk/

<br>
##Using webOS TV Eclipse IDE
http://developer.lge.com/webOSTV/sdk/web-sdk/webos-tv-ide/using-webide/

<br>
##Creating a Hosted Web App
http://developer.lge.com/webOSTV/develop/web-app/app-developer-guide/creating-and-deploying-hosted-web-application/
```javascript
<html>
    <head>
        <meta http-equiv="refresh" content="0;url=http://www.example.com/index.html">
    </head>
</html>
```

javascript
```javascript
location.href='http://www.example.com/index.html';
```

<br>
##player
 * HTML5 Video
```javascript
<video id="myVideo">
    <source src="./video/oceans-clip.mp4" type="video/mp4" />
</video>

```
 * enyo-moonstone video player
```javascript
var VideoPlayer = require('moonstone-extra/VideoPlayer')
```


<br>
##Build App on webOS TV
http://developer.lge.com/webOSTV/develop/web-app/app-test/

1. 於 http://developer.lge.com 註冊開發人員帳號

2. 下載Developer Mode App並輸入帳號密碼

3. 與webOS IDE間建立連線

4. Run as webOS_TV

<br>
##App Metadata (appinfo.json)
 * 設定App resolution ( "1920x1080", "1280x720" )
```
"resolution": "1280x720"
```
 http://developer.lge.com/webOSTV/develop/web-app/app-developer-guide/app-metadata
 
 <br>
##API
<b>Device Unique ID</b>

http://developer.lge.com/webOSTV/api/webos-service-api/device-unique-id/
<b>device info</b>
 
<b>remote keycode</b>

http://developer.lge.com/webOSTV/design/webos-tv-system-ui/remote-control

Button | Keycode
------ | -------
Left   | 0x25
Up	   | 0x26
Right  | 0x27
Down   | 0x28
Select | 0x0D
Back   | 0x1CD
Red	   | 0x193
Green  | 0x194
Yellow | 0x195
Blue   | 0x196
 
 <br>
##submit App to LG seller Lounge
http://seller.lgappstv.com/seller/main/Main.lge



