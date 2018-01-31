var gulp = require('gulp'),
    uncss = require('gulp-uncss');
gulp.task('uncss', function () {
    gulp.src("*.css")//css dir
    .pipe(uncss({
        html: ["*.html"]
        //html dir
    }))
    .pipe(gulp.dest("dist/uncss2"));
    //new css dir
});