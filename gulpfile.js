var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('compile:web:scripts', function () {
  return gulp.src(['src/web/scripts/**/*.js'])
    .pipe($.babel())
    .pipe(gulp.dest('app/web/scripts'));
});
