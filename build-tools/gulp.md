# Gulp.js

> Gulp.js is an open-source JavaScript toolkit, used as a streaming build system in front-end web development.
> It is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development like minification, concatenation, cache busting, unit testing, linting, optimization, etc.

### 應用實例

**如何依開發環境不同, 載入不同的檔案?**

```js
var isLocal, isDev;

//Default/Local Task
gulp.task('default', function (cd) {
    isLocal = true;
    isDev = true;
    checkPath();
    runsequence('clean', ['html', 'sass', 'js', 'copyImg', 'connectDist'], 'watch', cd);
});

gulp.task('testing', function (cd) {
    isDev = true;
    isLocal = false;
    destPath = buildPath
    runsequence('clean', ['html', 'sass', 'js', 'copyImg'], 'writeVersion', cd);
});

gulp.task('production', function (cd) {
    isDev = false;
    isLocal = false;
    destPath = buildPath
    runsequence('clean', ['html', 'sass', 'js', 'copyImg'], 'writeVersion', cd);
});

gulp.task('static', function () {
    gulp.src(['src/static/**'])
        .pipe(gulp.dest(destPath + 'static'));

    //import liff-id dynamically
    if (isDev) {
        if (isLocal) {
            gulp.src(['src/liff/local_liff.js'])
                .pipe(concat('liff_id.js'))
                .pipe(gulp.dest(destPath + jsFolder));
        } else {
            gulp.src(['src/liff/staging_liff.js'])
                .pipe(concat('liff_id.js'))
                .pipe(gulp.dest(destPath + jsFolder));
        }
    } else {
        gulp.src(['src/liff/production_liff.js'])
            .pipe(concat('liff_id.js'))
            .pipe(gulp.dest(destPath + jsFolder));
    }
});
```

