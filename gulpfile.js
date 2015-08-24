var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
  gulp.src('./app/styles/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('./build/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./app/styles/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
