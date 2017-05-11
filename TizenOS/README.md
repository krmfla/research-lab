# TizenOS (smart TV)
>site: http://developer.samsung.com/tv/develop

<br />

## Player
**AVPlay (Video Play) Sample**

http://developer.samsung.com/tv/develop/api-references/samsung-product-api-references/avplay-api/

Environment Set Up
```javascript
<script src="$WEBAPIS/webapis/webapis.js"></script>
```

using the AVPlay object
```javascript
<object id='av-player' type='application/avplayer'></object>
```

<br />

**AVPlay API**

http://developer.samsung.com/tv/develop/api-references/samsung-product-api-references/avplay-api

sample code
```javascript
webapis.avplay.open(URL);
webapis.avplay.setDisplayRect(0, 0, 1280, 720);

var listener = {
  "onbufferingcomplete": function () {
    //on buffering complete
  },
	"onerror": function (eventType) {
    //on error
  }
};
webapis.avplay.setListener(listener);
webapis.avplay.prepareAsync(SUCCESS_CALLBACK, ERROR_CALLBACK);

function SUCCESS_CALLBACK() {
  webapis.avplay.play();
}

function ERROR_CALLBACK() {
}

function STOP_PLAYER() {
  webapis.avplay.close();
}
```
<br />

official sample code

https://github.com/SamsungDForum/PlayerAVPlayMultitasking/blob/master/PlayerAVPlayMultitasking/videoPlayer.js


