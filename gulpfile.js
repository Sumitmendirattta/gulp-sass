'use strict';

var gulp = require('gulp');

// load gulp-sass plugin
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

// define the gulp "task" that will compile your sass
/* We make a few assumptions here.  Change as your project requires:
*  1. Your sass files are in a scss/ directory at the root of your project
*  2. Your sass files using the "Sassy CSS" syntax, and thus end in .scss
*  3. Your CSS stylesheets will live in the stylesheets/ directory at the root of your project
*/
// gulp.task('sass', function() {
//   gulp.src('scss/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('stylesheets'));
// });

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
  // ...
})

// define the gulp task that will watch for changes in your sass
gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
});

// define the default gulp task
gulp.task('default', ['sass', 'watch']);

gulp.task('hello', function() {
    console.log('Hello Zell');
});


gulp.task('gulp-compile-scss', function () {
  return gulp.src('app/scss/styles.scss') // Get source files with gulp.src
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('app/css')) // Outputs the file in the destination folder
})

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']); 
});


gulp.task('sass-error', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

