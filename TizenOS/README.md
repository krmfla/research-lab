#TizenOS (for smart TV)
>site: https://www.samsungdforum.com/

##Player
<b>AVPlay (Video Play) Sample</b>

https://www.samsungdforum.com/TizenSampleGuide/tizen3461/index.html

Environment Set Up
```javascript
<script src="$WEBAPIS/webapis/webapis.js"></script>
```

using the AVPlay object
```javascript
<object id='av-player' type='application/avplayer'></object>
```

<b>AVPlay API</b>

https://www.samsungdforum.com/TizenApiGuide/tizen3001/index.html

sample code
```javascript
webapis.avplay.open(url);
webapis.avplay.close();
webapis.avplay.prepareAsync(successCallback, errorCallback);
webapis.avplay.play();

```


