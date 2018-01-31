var gulp = require('gulp'),
    uncss = require('gulp-uncss');
gulp.task('uncss', function () {
    gulp.src("*.css")//这里是需要去除无用css目录
    .pipe(uncss({
        html: ["*.html"]
        //这里是项目所有的html目录
    }))
    .pipe(gulp.dest("dist/uncss2"));
    //这里是去除无用css之后生成新的css目录
});