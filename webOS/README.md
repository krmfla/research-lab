#webOS Summary
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
<meta http-equiv="refresh" content="0;url=http://www.example.com/index.html">
```

javascript
```javascript
location.href='http://www.example.com/index.html';
```

<br>
##Player
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
require webOS.js:
```
<script src="webOSjs-0.1.0/webOS.js" charset="utf-8"></script>
```

<b>Device Unique ID</b>

http://developer.lge.com/webOSTV/api/webos-service-api/device-unique-id/

<b>TV Device Information</b>

http://developer.lge.com/webOSTV/api/webos-service-api/tv-device-information/
 
<b>remote keycode</b>

http://developer.lge.com/webOSTV/design/webos-tv-system-ui/remote-control

Button  | Left | Up   | Right | Down | Select | Back  | Red   | Green | Yellow | Blue
------- | ---- | ---- | ----- | ---- | ------ | ----- | ----- | ----- | ------ | -----
Keycode | 37   | 38   | 39    | 40   | 13     | 461   | 403   | 404   | 405    | 406
Hex     | 0x25 | 0x26 | 0x27  | 0x28 | 0x0D   | 0x1CD | 0x193 | 0x194 | 0x195  | 0x196


Button  | 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9
------- | -- | -- | -- | -- | -- | -- | -- | -- | -- | --
Keycode | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57

<br>
Button  | 0   | 1   |
------- | --- | --- |
Keycode | 48  | 49  |
Keycode | 48  | 49  |


<b>Supported Standard Web APIs.ods (excel)</b>

http://developer.lge.com/webOSTV/files/4314/6191/7265/Supported_Standard_Web_APIs.ods

<br>
 
##App Icon & Background style setting
http://developer.lge.com/webOSTV/develop/web-app/app-developer-guide/app-packaging-guide/key-app-assets/
 
##submit App to LG seller Lounge
http://seller.lgappstv.com/seller/main/Main.lge



