#Cordova
>website: https://cordova.apache.org/

##建立cordova專案
```
$ cordova create PROJECT_FOLDER APP_ID APP_NAME
```

##build android app

安裝android-studio

啟動
```
$ android-studio/bin/studio.sh
```
於android-studio內 run 模擬器

<br>

<b>建立App平台</b>
```
$ cordova platform add android
```

build App
```
$ cordova run android
```
apk位置: platforms/android/build/outputs/apk/

若因未定義路徑而build失敗
```
$ export ANDROID_HOME=/.../Android/SDK
```
...為指向ANdroid/SDK的路徑
