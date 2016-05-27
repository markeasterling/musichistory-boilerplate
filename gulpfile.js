'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const jshint = require('gulp-jshint')
const sassLint = require('gulp-sass-lint')

gulp.task('lint:js', () => (
  gulp.src('./static/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
))

const sassPath = './static/**/*.scss'

gulp.task('sass',['sass:compile','sass:watch'])
gulp.task('sass:compile', () => (
  gulp.src('./static/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./static'))
))

gulp.task('sass:watch', function () {
  gulp.watch('./static/**/*.scss', ['sass']);
})

gulp.task('sass:lint', () => (
  gulp.src('./static/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
))