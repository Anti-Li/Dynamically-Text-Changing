var gulp = require('gulp'),
    uncss = require('gulp-uncss');
gulp.task('default', function () {
    gulp.src("*.css")//css dir
    .pipe(uncss({
        html: ["*.html"]
        //html dir
    }))
    .pipe(gulp.dest("uncss2"));
    //new css dir
});