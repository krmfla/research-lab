# Apache Cordova

>website: https://cordova.apache.org/

## 建立cordova專案
```
$ cordova create PROJECT_FOLDER APP_ID APP_NAME
```

## build android app

**安裝android-studio**

啟動
```
$ android-studio/bin/studio.sh
```
於android-studio內 run 模擬器

<br />

**建立App平台**
```
$ cordova platform add android
```

**設置app icon**
>Launcher Icon Generator

>https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html

於config.xml設置
```xml
<platform name="android">
    <allow-intent href="market:*" />
    <icon src="res/mipmap-ldpi/ic_launcher.png" density="ldpi" />
    <icon src="res/mipmap-mdpi/ic_launcher.png" density="mdpi" />
    <icon src="res/mipmap-hdpi/ic_launcher.png" density="hdpi" />
    <icon src="res/mipmap-xhdpi/ic_launcher.png" density="xhdpi" />
    <icon src="res/mipmap-xxhdpi/ic_launcher.png" density="xxhdpi" />
    <icon src="res/mipmap-xxxhdpi/ic_launcher.png" density="xxxhdpi" />
</platform>
```

**build App**
```
$ cordova run android
```
apk位置: platforms/android/build/outputs/apk/

<br />

若因未定義路徑而build失敗
```
$ export ANDROID_HOME=/.../Android/SDK
```
...為指向ANdroid/SDK的路徑
