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
## [20+ FFmpeg Commands For Beginners](https://www.ostechnix.com/20-ffmpeg-commands-beginners/)

