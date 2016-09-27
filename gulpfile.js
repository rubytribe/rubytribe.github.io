/* File: gulpfile.js */

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/style'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('style.scss', ['sass']);
});

gulp.task('default', function() {
  gulp.watch('scss/style.scss', ['sass']);
});