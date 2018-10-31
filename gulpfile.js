'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('pug', function() {
    return gulp.src('src/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'));
})
gulp.task('watch', function () {
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/pug/*.pug', ['pug']);
});

