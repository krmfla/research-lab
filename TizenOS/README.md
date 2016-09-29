#TizenOS (smart TV)
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

official sample code

https://github.com/SamsungDForum/PlayerAVPlayMultitasking/blob/master/PlayerAVPlayMultitasking/videoPlayer.js


