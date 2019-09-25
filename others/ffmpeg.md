# FFMPEG

## [How to create a video from images with FFmpeg?](https://stackoverflow.com/questions/24961127/how-to-create-a-video-from-images-with-ffmpeg)

```cmd
ffmpeg -r 1/5 -i step_1.png -c:v libx264 -vf fps=25 -pix_fmt yuv420p image.mp4

ffmpeg -y -r 1/5 -f concat -safe 0 -i "test.txt" -c:v libx264 -vf "fps=25,format=yuv420p" "image.mp4"
```

```sh
# test.txt

file 'step_1.png'
file 'step_2.png'
```
<br />

## convert video to gif

```cmd
ffmpeg -ss 00:00:00 -i test.mp4 -to 10 -r 10 -vf scale=600:-1 cutekid_cry.gif
```

## convert audio to video

```cmd
ffmpeg -loop 1 -i a.jpg -i a.mp3 -shortest -acodec copy a.mp4
```

<br />

## [merge audio and video file in ffmpeg](https://superuser.com/questions/277642/how-to-merge-audio-and-video-file-in-ffmpeg)

```cmd
ffmpeg -i video.mp4 -i audio.wav -c:v copy -c:a aac -strict experimental output.mp4
```

<br />

## [add audio to video at specific time?](https://stackoverflow.com/questions/48169031/how-to-add-audio-to-existing-video-using-ffmpeg-at-specific-time)

```cmd
ffmpeg -i in.avi -i audio.wav -filter_complex "[1]adelay=62000|62000[aud];[0][aud]amix" -c:v copy out.avi

ffmpeg -i in.avi -i audio1.wav -i audio2.wav -filter_complex \
"[1]adelay=30000|30000[aud1];[2]adelay=90000|90000[aud2];[0][aud1][aud2]amix=3" -c:v copy out.avi
```

<br />

## [20+ FFmpeg Commands For Beginners](https://www.ostechnix.com/20-ffmpeg-commands-beginners/)

<br />

## parameters

parameters | description | example
---------- | ----------- | --------
-i         | 輸入檔案位置 | `-i a.mp4`  `-i https://test.com/a.mp4`
-y         | 略過覆蓋詢問 | 
-s         | 輸出尺寸     | -s 1280x720 
-map       | 對應檔案資源 | 
-t         | 時間長度(秒)

```cmd
ffmpeg -i video.mp4 -map 0:1 out.mp3
```

<br />

## reference

[FFMPEG 常用命令筆記 / 教學](https://moon-half.info/p/2902)
