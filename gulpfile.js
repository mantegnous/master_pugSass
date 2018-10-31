'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('src/sass/*.scss', ['sass']);
});

var pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
    return gulp.src('src/*.pug')
        .pipe(pug({
            // Your options in here.
        }))
});